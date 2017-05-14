import {Result} from './Result';
import {Rule} from './Rule';
import {RulesClassesMap} from './RulesClassesMap';
import {Utils} from './Utils';

export class Validator {
    constructor() {
        this.results = {};
        this.rules = {};
        this.vals = {};
    }

    sanitize() {
        throw new SyntaxError('Метод отсутствует');
    }

    /**
     * @returns {Boolean}
     */
    validate() {
        this.removeResults();
        var _result = true;
        for (var fieldName in this.rules) {
            var result = new Result();
            if (!this.rules[fieldName].validate(this.getVal(fieldName), result)) {
                _result = false;
            }
            this.setResult(fieldName, result);
        }
        return _result;
    }

    /**
     * @param {String} fieldName
     * @returns {Boolean}
     */
    validateVal(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        this.removeResult(fieldName);
        var _result = true;
        if (this.hasRule(fieldName)) {
            var result = new Result();
            if (!this.rules[fieldName].validate(this.getVal(fieldName), result)) {
                _result = false;
            }
            this.setResult(fieldName, result);
        }
        return _result;
    }

    // -------------------------------------------------------------------------

    /**
     * @param {String} fieldName
     * @returns {Null|Result}
     */
    getResult(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        return (typeof this.results[fieldName] !== 'undefined') ? this.results[fieldName] : null;
    }

    /**
     * @returns {Object} {fieldName: Result, ...}
     */
    getResults() {
        return this.results;
    }

    /**
     * @param {String} fieldName
     * @returns {Boolean}
     */
    hasResult(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        return (typeof this.results[fieldName] !== 'undefined');
    }

    /**
     * @returns {Boolean}
     */
    hasResults() {
        for (var fieldName in this.results) {
            return true;
        }
        return false;
    }

    /**
     * @param {String} fieldName
     * @returns {Validator}
     */
    removeResult(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        if (typeof this.results[fieldName] !== 'undefined') {
            delete this.results[fieldName];
        }
        return this;
    }

    /**
     * @returns {Validator}
     */
    removeResults() {
        this.results = {};
        return this;
    }

    /**
     * @param {String} fieldName
     * @param {Result} result
     * @returns {Validator}
     */
    setResult(fieldName, result) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        } else if ((typeof result !== 'object') || !(result instanceof Result)) {
            throw new TypeError('Параметр result должен быть объектом класса Result');
        }
        this.results[fieldName] = result;
        return this;
    }

    /**
     * @param {Object} results {fieldName: Result, ...}
     * @returns {Validator}
     */
    setResults(results) {
        if (typeof results !== 'object') {
            throw new TypeError('Параметр results должен быть объектом');
        }
        this.removeResults();
        for (var fieldName in results) {
            this.setResult(fieldName, results[fieldName]);
        }
        return this;
    }

    // -------------------------------------------------------------------------

    /**
     * @param {String} fieldName
     * @returns {Null|Rule}
     */
    getRule(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        return (typeof this.rules[fieldName] !== 'undefined') ? this.rules[fieldName] : null;
    }

    /**
     * @returns {Object} {fieldName: Rule, ...}
     */
    getRules() {
        return this.rules;
    }

    /**
     * @param {String} fieldName
     * @returns {Boolean}
     */
    hasRule(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        return (typeof this.rules[fieldName] !== 'undefined');
    }

    /**
     * @returns {Boolean}
     */
    hasRules() {
        for (var fieldName in this.rules) {
            return true;
        }
        return false;
    }

    /**
     * @param {String} fieldName
     * @returns {Validator}
     */
    removeRule(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        if (typeof this.rules[fieldName] !== 'undefined') {
            delete this.rules[fieldName];
        }
        return this;
    }

    /**
     * @returns {Validator}
     */
    removeRules() {
        this.rules = {};
        return this;
    }

    /**
     * @param {String} fieldName
     * @param {Array|Object|String} rule
     * Array: ['Rule1', Rule2, ...]
     * Object: Rule
     * Object: {'Rule1': {param: paramVal, ...}, 'Rule2': null, ...}
     * String: 'Rule'
     * @returns {Validator}
     */
    setRule(fieldName, rule) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        if (Utils.isArray(rule)) {
            var compositeRuleClass = this.getRuleClass('AllOf');
            for (var i in rule) {
                if (typeof rule[i] === 'string') {
                    compositeRuleClass.rules().add(this.getRuleClass(rule[i]));
                } else if (Utils.isArray(rule[i]) && (typeof rule[i][0] === 'string') && (typeof rule[i][1] === 'object')) {
                    compositeRuleClass.rules().add(this.getRuleClass(rule[i][0], rule[i][1]));
                } else if ((typeof rule[i] === 'object') && rule[i] instanceof Rule) {
                    compositeRuleClass.rules().add(rule[i]);
                } else {
                    throw new TypeError('Неправильный формат параметра rule (см. описание)');
                }
            }
            this.rules[fieldName] = compositeRuleClass;
        } else if (typeof rule === 'string') {
            this.rules[fieldName] = this.getRuleClass(rule);
        } else if (typeof rule === 'object') {
            if (rule instanceof Rule) {
                this.rules[fieldName] = rule;
            } else {
                var compositeRuleClass = this.getRuleClass('AllOf');
                for (var ruleClassName in rule) {
                    var params = (typeof rule[ruleClassName] === 'object') ? rule[ruleClassName] : null;
                    compositeRuleClass.rules().add(this.getRuleClass(ruleClassName, params));
                }
                this.rules[fieldName] = compositeRuleClass;
            }
        } else {
            throw new TypeError('Неправильный формат параметра rule (см. описание)');
        }
        return this;
    }

    /**
     * @param {Object} rules {fieldName: Rule, ...}
     * @returns {Validator}
     */
    setRules(rules) {
        if (typeof rules !== 'object') {
            throw new TypeError('Параметр rules должен быть объектом');
        }
        this.removeRules();
        for (var fieldName in rules) {
            this.setRule(fieldName, rules[fieldName]);
        }
        return this;
    }

    // -------------------------------------------------------------------------

    /**
     * @param {String} fieldName
     * @returns {}
     */
    getVal(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        return (typeof this.vals[fieldName] !== 'undefined') ? this.vals[fieldName] : null;
    }

    /**
     * @returns {Object} {fieldName: val, ...}
     */
    getVals() {
        return this.vals;
    }

    /**
     * @param {String} fieldName
     * @returns {Boolean}
     */
    hasVal(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        return (typeof this.vals[fieldName] !== 'undefined');
    }

    /**
     * @returns {Boolean}
     */
    hasVals() {
        for (var fieldName in this.vals) {
            return true;
        }
        return false;
    }

    /**
     * @param {String} fieldName
     * @returns {Validator}
     */
    removeVal(fieldName) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        if (typeof this.vals[fieldName] !== 'undefined') {
            delete this.vals[fieldName];
        }
        return this;
    }

    /**
     * @returns {Validator}
     */
    removeVals() {
        this.vals = {};
        return this;
    }

    /**
     * @param {String} fieldName
     * @param {} val
     * @returns {Validator}
     */
    setVal(fieldName, val) {
        if (typeof fieldName !== 'string') {
            throw new TypeError('Параметр fieldName должен быть строкой');
        }
        this.vals[fieldName] = val;
        return this;
    }

    /**
     * @param {Object} vals {fieldName: val, ...}
     * @returns {Validator}
     */
    setVals(vals) {
        if (typeof vals !== 'object') {
            throw new TypeError('Параметр vals должен быть объектом');
        }
        this.removeVals();
        for (var fieldName in vals) {
            this.setVal(fieldName, vals[fieldName]);
        }
        return this;
    }

    // -------------------------------------------------------------------------

    /**
     * @param {String} className
     * @param {Null|Object} params
     * @returns {Rule}
     */
    getRuleClass(className, params = null) {
        if (typeof className !== 'string') {
            throw new TypeError('Параметр className должен быть строкой');
        } else if (typeof RulesClassesMap[className] === 'undefined') {
            throw new Error('Класс отсутствует [' + className + ']');
        }
        return new RulesClassesMap[className](params);
    }
}