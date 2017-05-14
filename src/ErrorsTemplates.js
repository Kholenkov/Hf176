import {Error} from './Error';
import {Utils} from './Utils';

export class ErrorsTemplates {
    constructor() {
        this.errorsTemplates = {};
    }

    /**
     * @param {Object|String} arg1
     * @param {Null|Error} arg2
     * @returns {ErrorsTemplates}
     */
    add(arg1, arg2 = null) {
        if (typeof arg1 === 'object') {
            if (Utils.isArray(arg1)) {
                throw new TypeError('Параметр arg1 должен быть объектом');
            }
            for (var name in arg1) {
                this.add(name, arg1[name]);
            }
        } else if (typeof arg1 !== 'string') {
            throw new TypeError('Параметр arg1 должен быть строкой');
        } else if (typeof arg2 !== 'object') {
            throw new TypeError('Параметр arg2 должен быть объектом');
        } else if (!(arg2 instanceof Error)) {
            throw new TypeError('Параметр arg2 должен быть объектом класса Error');
        } else {
            this.errorsTemplates[arg1] = arg2;
        }
        return this;
    }

    /**
     * @param {Function} callback
     * @returns {ErrorsTemplates}
     */
    forEach(callback) {
        if (typeof callback === 'function') {
            for (var name in this.errorsTemplates) {
                callback.apply(this, [this.errorsTemplates[name], name]);
            }
        } else {
            throw new TypeError('Параметр callback должен быть функцией');
        }
        return this;
    }

    /**
     * @param {Null|String} name
     * @param {} defaultVal
     * @returns {}
     */
    get(name = null, defaultVal = null) {
        if (typeof name === 'string') {
            return (typeof this.errorsTemplates[name] !== 'undefined') ? this.errorsTemplates[name] : defaultVal;
        } else if (name !== null) {
            throw new TypeError('Параметр name должен быть null либо строкой');
        }
        return this.errorsTemplates;
    }

    /**
     * @param {Null|String} name
     * @returns {Boolean}
     */
    has(name = null) {
        if (typeof name === 'string') {
            return (typeof this.errorsTemplates[name] !== 'undefined');
        } else if (name !== null) {
            throw new TypeError('Параметр name должен быть null либо строкой');
        }
        for (var name in this.errorsTemplates) {
            return true;
        }
        return false;
    }

    /**
     * @param {Null|String} name
     * @returns {ErrorsTemplates}
     */
    remove(name = null) {
        if (typeof name === 'string') {
            if (typeof this.errorsTemplates[name] !== 'undefined') {
                delete this.errorsTemplates[name];
            }
        } else if (name === null) {
            this.errorsTemplates = {};
        } else {
            throw new TypeError('Параметр name должен быть null либо строкой');
        }
        return this;
    }

    /**
     * @param {Object|String} arg1
     * @param {Null|Error} arg2
     * @returns {ErrorsTemplates}
     */
    set(arg1, arg2 = null) {
        if (typeof arg1 === 'object') {
            this.remove();
        }
        return this.add(arg1, arg2);
    }
}