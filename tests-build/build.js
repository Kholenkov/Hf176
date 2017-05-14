/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Mixin_ErrorsTemplates__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mixin_Params__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Result__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils__ = __webpack_require__(1);






class Rule extends __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Mixin_Params__["a" /* Params */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Mixin_ErrorsTemplates__["a" /* ErrorsTemplates */])(class {
})) {
    /**
     * @param {Null|Object} params
     */
    constructor(params = null) {
        super();
        if (params !== null) {
            this.params().set(params);
    }
    }

    sanitize(val, result = null) {
        throw new SyntaxError('Метод отсутствует');
    }

    validate(val, result = null) {
        throw new SyntaxError('Метод отсутствует');
    }

    // -------------------------------------------------------------------------

    _addErrorsTemplates(errorsTemplates) {
        if (typeof errorsTemplates !== 'object') {
            throw new TypeError('Параметр errorsTemplates должен быть объектом');
        }
        for (var name in errorsTemplates) {
            this.errorsTemplates().add(name, (new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* Error */]()).setCode(name).setMessage(errorsTemplates[name]));
        }
        return this;
    }

    _checkResult(result) {
        return ((typeof result === 'object') && (result instanceof __WEBPACK_IMPORTED_MODULE_3__Result__["a" /* Result */]));
    }

    _valIsEmpty(val) {
        return ((val === null) || ((typeof val === 'string') || __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].isArray(val)) && !val.length);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rule;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Utils {
    /**
     * @param {} arg
     * @returns {Boolean}
     */
    static isArray(arg) {
        return (Object.prototype.toString.call(arg) === '[object Array]');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Utils;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class Type extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Неправильный тип значения'});
    }

    _validate(isValid, result = null) {
        if (!isValid) {
            if (this._checkResult(result)) {
                result.set(false);
                result.errors().add(this.errorsTemplates().get('invalid'));
            }
            return false;
        }
        if (this._checkResult(result)) {
            result.set(true);
        }
        return true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Type;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Mixin_Errors__ = __webpack_require__(50);


class Result extends __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Mixin_Errors__["a" /* Errors */])(class {
}) {
    constructor() {
        super();
        this.result = null;
    }

    /**
     * @returns {Boolean|Null}
     */
    get() {
        return this.result;
    }

    /**
     * @returns {Result}
     */
    reset() {
        this.result = null;
        this.errors().remove();
        return this;
    }

    /**
     * @param {Null|Boolean} result
     * @returns {Result}
     */
    set(result) {
        if ((result !== null) && (typeof result !== 'boolean')) {
            throw new TypeError('Параметр result должен быть null либо логическим (boolean)');
        }
        this.result = result;
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Result;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Mixin_Rules__ = __webpack_require__(53);



class CompositeRule extends __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Mixin_Rules__["a" /* Rules */])(__WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */]) {
    /**
     * @param {Null|Object} rules 
     */
    constructor(rules = null) {
        super();
        if (rules !== null) {
            this.rules().set(rules);
    }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CompositeRule;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils__ = __webpack_require__(1);


class Error {
    constructor() {
        this.code = null;
        this.message = null;
        this.replacements = null;
    }

    /**
     * @param {Null|String} message
     * @param {Null|Array} replacements
     * @returns {Null|String}
     */
    formatMessage(message, replacements) {
        if (message !== null) {
            if (typeof message !== 'string') {
                throw new TypeError('Параметр message должен быть строкой');
            } else if (replacements !== null) {
                if (!__WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* Utils */].isArray(replacements)) {
                    throw new TypeError('Параметр replacements должен быть массивом');
                }
                replacements.forEach(function (replacement, index) {
                    message = message.replace(new RegExp('\\{' + index + '\\}', 'g'), replacement);
                });
            }
        }
        return message;
    }

    /**
     * @returns {Null|Number|String}
     */
    getCode() {
        return this.code;
    }

    /**
     * @returns {Null|String}
     */
    getMessage() {
        return this.formatMessage(this.getRawMessage(), this.getReplacements());
    }

    /**
     * @returns {Null|String}
     */
    getRawMessage() {
        return this.message;
    }

    /**
     * @returns {Array|Null}
     */
    getReplacements() {
        return this.replacements;
    }

    /**
     * @param {Null|Number|String} code
     * @returns {Error}
     */
    setCode(code) {
        if ((code !== null) && (typeof code !== 'number') && (typeof code !== 'string')) {
            throw new TypeError('Параметр code должен быть null, числом либо строкой');
        }
        this.code = code;
        return this;
    }

    /**
     * @param {Null|String} message
     * @returns {Error}
     */
    setMessage(message) {
        if ((message !== null) && (typeof message !== 'string')) {
            throw new TypeError('Параметр message должен быть null либо строкой');
        }
        this.message = message;
        return this;
    }

    /**
     * @param {Null|Array} replacements
     * @returns {Error}
     */
    setReplacements(replacements) {
        if ((replacements !== null) && !__WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* Utils */].isArray(replacements)) {
            throw new TypeError('Параметр replacements должен быть null либо массивом');
        }
        this.replacements = replacements;
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Error;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class Interval extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            invalidType: 'Неправильный тип значения',
            mustGreater: 'Значение должно быть строго больше {0}',
            mustGreaterOrEqual: 'Значение должно быть больше либо равно {0}',
            mustLess: 'Значение должно быть строго меньше {0}',
            mustLessOrEqual: 'Значение должно быть меньше либо равно {0}'
        });
    }

    validate(val, result = null) {
        return this._validate(val, result);
    }

    _checkMax(val, max, maxInclusive) {
        return maxInclusive ? (val <= max) : (val < max);
    }

    _checkMin(val, min, minInclusive) {
        return minInclusive ? (val >= min) : (val > min);
    }

    _checkValType(val) {
        return true;
    }

    _convertVal(val) {
        return val;
    }

    _validate(val, result = null) {
        var _result = true;
        if (!this._valIsEmpty(val)) {
            if (!this._checkValType(val)) {
                _result = false;
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidType'));
                }
            } else {
                val = this._convertVal(val);
                var min = this.params().get('min', null);
                if (min !== null) {
                    if (typeof val !== typeof min) {
                        throw new TypeError('Проверяемое и минимальное значения должны быть одинакового типа');
                    } else {
                        var minInclusive = this.params().get('minInclusive', true);
                        if (typeof minInclusive !== 'boolean') {
                            throw new TypeError('Параметр minInclusive должен быть логическим (boolean)');
                        } else if (!this._checkMin(val, min, minInclusive)) {
                            _result = false;
                            if (this._checkResult(result)) {
                                var error = this.errorsTemplates().get(minInclusive ? 'mustGreaterOrEqual' : 'mustGreater');
                                error.setReplacements([min]);
                                result.errors().add(error);
                            }
                        }
                    }
                }
                var max = this.params().get('max', null);
                if (max !== null) {
                    if (typeof val !== typeof max) {
                        throw new TypeError('Проверяемое и максимальное значения должны быть одинакового типа');
                    } else {
                        var maxInclusive = this.params().get('maxInclusive', true);
                        if (typeof maxInclusive !== 'boolean') {
                            throw new TypeError('Параметр maxInclusive должен быть логическим (boolean)');
                        } else if (!this._checkMax(val, max, maxInclusive)) {
                            _result = false;
                            if (this._checkResult(result)) {
                                var error = this.errorsTemplates().get(maxInclusive ? 'mustLessOrEqual' : 'mustLess');
                                error.setReplacements([max]);
                                result.errors().add(error);
                            }
                        }
                    }
                }
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Interval;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(1);



class Pattern extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            invalid: 'Значение не соответствует паттерну',
            invalidPattern: 'Неправильный паттерн',
            invalidPatternFlags: 'Неправильные флаги паттерна'
        });
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            var pattern = this.params().get('pattern', null);
            if (pattern === null) {
                _result = true;
            } else if (typeof pattern !== 'string') {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidPattern'));
                }
            } else {
                if (typeof val === 'number') {
                    val = val.toString();
                }
                var patternFlags = this.params().get('patternFlags', []);
                if (!__WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* Utils */].isArray(patternFlags)) {
                    if (this._checkResult(result)) {
                        result.errors().add(this.errorsTemplates().get('invalidPatternFlags'));
                    }
                } else {
                    _result = (new RegExp(pattern, patternFlags)).test(val);
                    if (!_result && this._checkResult(result)) {
                        result.errors().add(this.errorsTemplates().get('invalid'));
                    }
                }
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pattern;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class BankCode extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            invalidFormat: 'БИК должен состоять только из 9 цифр',
            invalidType: 'Неправильный тип значения БИК'
        });
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            if (typeof val === 'number') {
                val = val.toString();
            }
            if (typeof val !== 'string') {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidType'));
                }
            } else if (/[^0-9]/.test(val) || (val.length !== 9)) {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidFormat'));
                }
            } else {
                _result = true;
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BankCode;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type__ = __webpack_require__(2);


class BoolType extends __WEBPACK_IMPORTED_MODULE_0__Type__["a" /* Type */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является логическим'});
    }

    validate(val, result = null) {
        return super._validate(typeof val === 'boolean', result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BoolType;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type__ = __webpack_require__(2);


class NumberType extends __WEBPACK_IMPORTED_MODULE_0__Type__["a" /* Type */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является числом'});
    }

    validate(val, result = null) {
        return super._validate(typeof val === 'number', result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NumberType;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CompositeRule__ = __webpack_require__(4);


class AllOf extends __WEBPACK_IMPORTED_MODULE_0__CompositeRule__["a" /* CompositeRule */] {
    constructor(rules = null) {
        super(rules);
        this._addErrorsTemplates({invalid: 'Значение должно соответствовать всем правилам валидации'});
    }

    validate(val, result = null) {
        var rules = this.rules().get();
        for (var i in rules) {
            if (!rules[i].validate(val, result)) {
                if (this._checkResult(result)) {
                    result.set(false);
                    result.errors().add(this.errorsTemplates().get('invalid'));
                }
                return false;
            }
        }
        if (this._checkResult(result)) {
            result.set(true);
        }
        return true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AllOf;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CompositeRule__ = __webpack_require__(4);


class AnyOf extends __WEBPACK_IMPORTED_MODULE_0__CompositeRule__["a" /* CompositeRule */] {
    constructor(rules = null) {
        super(rules);
        this._addErrorsTemplates({invalid: 'Значение должно соответствовать хотя бы одному правилу валидации'});
    }

    validate(val, result = null) {
        var rules = this.rules().get();
        for (var i in rules) {
            if (rules[i].validate(val)) {
                if (this._checkResult(result)) {
                    result.set(true);
                }
                return true;
            }
        }
        if (this._checkResult(result)) {
            result.set(false);
            result.errors().add(this.errorsTemplates().get('invalid'));
        }
        return false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AnyOf;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CompositeRule__ = __webpack_require__(4);


class NoneOf extends __WEBPACK_IMPORTED_MODULE_0__CompositeRule__["a" /* CompositeRule */] {
    constructor(rules = null) {
        super(rules);
        this._addErrorsTemplates({invalid: 'Значение не должно соответствовать ни одному из правил валидации'});
    }

    validate(val, result = null) {
        var rules = this.rules().get();
        for (var i in rules) {
            if (rules[i].validate(val)) {
                if (this._checkResult(result)) {
                    result.set(false);
                    result.errors().add(this.errorsTemplates().get('invalid'));
                }
                return false;
            }
        }
        if (this._checkResult(result)) {
            result.set(true);
        }
        return true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NoneOf;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CompositeRule__ = __webpack_require__(4);


class OneOf extends __WEBPACK_IMPORTED_MODULE_0__CompositeRule__["a" /* CompositeRule */] {
    constructor(rules = null) {
        super(rules);
        this._addErrorsTemplates({invalid: 'Значение должно соответствовать только одному из правил валидации'});
    }

    validate(val, result = null) {
        var validRules = 0;
        var rules = this.rules().get();
        for (var i in rules) {
            if (rules[i].validate(val, result)) {
                validRules++;
            }
        }
        var _result = (validRules === 1);
        if (this._checkResult(result)) {
            result.set(_result);
            if (!_result) {
                result.errors().add(this.errorsTemplates().get('invalid'));
            }
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OneOf;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class AlwaysInvalid extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
    }

    validate(val, result = null) {
        return false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AlwaysInvalid;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class AlwaysValid extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
    }

    validate(val, result = null) {
        return true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AlwaysValid;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Interval__ = __webpack_require__(6);


class FloatInterval extends __WEBPACK_IMPORTED_MODULE_0__Interval__["a" /* Interval */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            mustGreater: 'Число с плавающей точкой должно быть строго больше {0}',
            mustGreaterOrEqual: 'Число с плавающей точкой должно быть больше либо равно {0}',
            mustLess: 'Число с плавающей точкой должно быть строго меньше {0}',
            mustLessOrEqual: 'Число с плавающей точкой должно быть меньше либо равно {0}'
        });
    }

    _checkValType(val) {
        if ((typeof val !== 'number') && (typeof val !== 'string')) {
            return false;
        }
        return /^\-?[0-9]*\.?[0-9]+$/.test(val.toString());
    }

    _convertVal(val) {
        return parseFloat(val);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FloatInterval;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Interval__ = __webpack_require__(6);


class IntInterval extends __WEBPACK_IMPORTED_MODULE_0__Interval__["a" /* Interval */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            mustGreater: 'Целое число должно быть строго больше {0}',
            mustGreaterOrEqual: 'Целое число должно быть больше либо равно {0}',
            mustLess: 'Целое число должно быть строго меньше {0}',
            mustLessOrEqual: 'Целое число должно быть меньше либо равно {0}'
        });
    }

    _checkValType(val) {
        if ((typeof val !== 'number') && (typeof val !== 'string')) {
            return false;
        }
        return /^\-?[0-9]+$/.test(val.toString());
    }

    _convertVal(val) {
        return parseInt(val);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IntInterval;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Interval__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(1);



class Length extends __WEBPACK_IMPORTED_MODULE_0__Interval__["a" /* Interval */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            mustGreater: 'Длина должна быть строго больше {0}',
            mustGreaterOrEqual: 'Длина должна быть больше либо равна {0}',
            mustLess: 'Длина должна быть строго меньше {0}',
            mustLessOrEqual: 'Длина должна быть меньше либо равна {0}'
        });
    }

    _checkValType(val) {
        return ((typeof val === 'number') || (typeof val === 'string') || __WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* Utils */].isArray(val));
    }

    _convertVal(val) {
        if (typeof val === 'number') {
            val = val.toString();
        }
        return val.length;
    }

    _valIsEmpty(val) {
        return (val === null);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Length;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(1);



class NotEmpty extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение должно быть непустым'});
    }

    validate(val, result = null) {
        var _result = !this._valIsEmpty(val);
        if (this._checkResult(result)) {
            result.set(_result);
            if (!_result) {
                result.errors().add(this.errorsTemplates().get('invalid'));
            }
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NotEmpty;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pattern__ = __webpack_require__(7);


class No extends __WEBPACK_IMPORTED_MODULE_0__Pattern__["a" /* Pattern */] {
    constructor(params = null) {
        super(params);
        this.params().set({
            pattern: '^no|нет$',
            patternFlags: ['i']
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = No;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pattern__ = __webpack_require__(7);


class Yes extends __WEBPACK_IMPORTED_MODULE_0__Pattern__["a" /* Pattern */] {
    constructor(params = null) {
        super(params);
        this.params().set({
            pattern: '^yes|да$',
            patternFlags: ['i']
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Yes;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BankCode__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rule__ = __webpack_require__(0);



class BankAccount extends __WEBPACK_IMPORTED_MODULE_1__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            bankCodeRequired: 'Требуется БИК',
            invalidCheckNumber: 'Неправильное контрольное число расчётного счёта',
            invalidFormat: 'Расчётный счёт должен состоять только из 20 цифр',
            invalidType: 'Неправильный тип значения расчётного счёта'
        });
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            var bankCode = new __WEBPACK_IMPORTED_MODULE_0__BankCode__["a" /* BankCode */]();
            var bankCodeVal = this.params().get('bankCode');
            if (bankCode._valIsEmpty(bankCodeVal)) {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('bankCodeRequired'));
                }
            } else if (bankCode.validate(bankCodeVal, result)) {
                if (typeof val === 'number') {
                    val = val.toString();
                }
                if (typeof val !== 'string') {
                    if (this._checkResult(result)) {
                        result.errors().add(this.errorsTemplates().get('invalidType'));
                    }
                } else if (/[^0-9]/.test(val) || (val.length !== 20)) {
                    if (this._checkResult(result)) {
                        result.errors().add(this.errorsTemplates().get('invalidFormat'));
                    }
                } else {
                    val = bankCodeVal.toString().slice(-3) + val;
                    var checksum = 0;
                    var coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
                    for (var i in coefficients) {
                        checksum += coefficients[i] * (val[i] % 10);
                    }
                    if (checksum % 10 === 0) {
                        _result = true;
                    } else if (this._checkResult(result)) {
                        result.errors().add(this.errorsTemplates().get('invalidCheckNumber'));
                    }
                }
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BankAccount;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BankCode__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rule__ = __webpack_require__(0);



class CorrespondentAccount extends __WEBPACK_IMPORTED_MODULE_1__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            bankCodeRequired: 'Требуется БИК',
            invalidCheckNumber: 'Неправильное контрольное число корреспондентского счёта',
            invalidFormat: 'Корреспондентский счёт должен состоять только из 20 цифр',
            invalidType: 'Неправильный тип значения корреспондентского счёта'
        });
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            var bankCode = new __WEBPACK_IMPORTED_MODULE_0__BankCode__["a" /* BankCode */]();
            var bankCodeVal = this.params().get('bankCode');
            if (bankCode._valIsEmpty(bankCodeVal)) {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('bankCodeRequired'));
                }
            } else if (bankCode.validate(bankCodeVal, result)) {
                if (typeof val === 'number') {
                    val = val.toString();
                }
                if (typeof val !== 'string') {
                    if (this._checkResult(result)) {
                        result.errors().add(this.errorsTemplates().get('invalidType'));
                    }
                } else if (/[^0-9]/.test(val) || (val.length !== 20)) {
                    if (this._checkResult(result)) {
                        result.errors().add(this.errorsTemplates().get('invalidFormat'));
                    }
                } else {
                    val = '0' + bankCodeVal.toString().slice(4, 6) + val;
                    var checksum = 0;
                    var coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
                    for (var i in coefficients) {
                        checksum += coefficients[i] * (val[i] % 10);
                    }
                    if (checksum % 10 === 0) {
                        _result = true;
                    } else if (this._checkResult(result)) {
                        result.errors().add(this.errorsTemplates().get('invalidCheckNumber'));
                    }
                }
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CorrespondentAccount;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class EntrepreneurCode extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            invalidCheckNumber: 'Неправильное контрольное число ОГРНИП',
            invalidFormat: 'ОГРНИП должен состоять только из 15 цифр',
            invalidType: 'Неправильный тип значения ОГРНИП'
        });
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            if (typeof val === 'number') {
                val = val.toString();
            }
            if (typeof val !== 'string') {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidType'));
                }
            } else if (/[^0-9]/.test(val) || (val.length !== 15)) {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidFormat'));
                }
            } else {
                var n15 = parseInt((parseInt(val.slice(0, -1)) % 13).toString().slice(-1));
                if (n15 === parseInt(val[14])) {
                    _result = true;
                } else if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidCheckNumber'));
                }
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EntrepreneurCode;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class LegalEntityCode extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            invalidCheckNumber: 'Неправильное контрольное число ОГРН',
            invalidFormat: 'ОГРН должен состоять только из 13 цифр',
            invalidType: 'Неправильный тип значения ОГРН'
        });
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            if (typeof val === 'number') {
                val = val.toString();
            }
            if (typeof val !== 'string') {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidType'));
                }
            } else if (/[^0-9]/.test(val) || (val.length !== 13)) {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidFormat'));
                }
            } else {
                var n13 = parseInt((parseInt(val.slice(0, -1)) % 11).toString().slice(-1));
                if (n13 === parseInt(val[12])) {
                    _result = true;
                } else if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidCheckNumber'));
                }
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LegalEntityCode;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class SocialInsuranceCode extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            invalidCheckNumber: 'Неправильное контрольное число СНИЛС',
            invalidFormat: 'СНИЛС должен состоять только из 11 цифр',
            invalidType: 'Неправильный тип значения СНИЛС'
        });
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            if (typeof val === 'number') {
                val = val.toString();
            }
            if (typeof val !== 'string') {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidType'));
                }
            } else if (/[^0-9]/.test(val) || (val.length !== 11)) {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidFormat'));
                }
            } else {
                var sum = 0;
                for (var i = 0; i < 9; i++) {
                    sum += parseInt(val[i]) * (9 - i);
                }
                var checkDigit = 0;
                if (sum < 100) {
                    checkDigit = sum;
                } else if (sum > 101) {
                    checkDigit = parseInt(sum % 101);
                    if (checkDigit === 100) {
                        checkDigit = 0;
                    }
                }
                if (checkDigit === parseInt(val.slice(-2))) {
                    _result = true;
                } else if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidCheckNumber'));
                }
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocialInsuranceCode;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class TaxpayerCode extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            invalidCheckNumber: 'Неправильное контрольное число ИНН',
            invalidFormat: 'ИНН должен состоять только из 10 или 12 цифр',
            invalidType: 'Неправильный тип значения ИНН'
        });
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            if (typeof val === 'number') {
                val = val.toString();
            }
            if (typeof val !== 'string') {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidType'));
                }
            } else if (/[^0-9]/.test(val) || ([10, 12].indexOf(val.length) === -1)) {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidFormat'));
                }
            } else {
                var checkDigit = function (inn, coefficients) {
                    var n = 0;
                    for (var i in coefficients) {
                        n += coefficients[i] * inn[i];
                    }
                    return parseInt(n % 11 % 10);
                };
                switch (val.length) {
                    case 10:
                        var n10 = checkDigit(val, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                        if (n10 === parseInt(val[9])) {
                            _result = true;
                        }
                        break;
                    case 12:
                        var n11 = checkDigit(val, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                        var n12 = checkDigit(val, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                        if ((n11 === parseInt(val[10])) && (n12 === parseInt(val[11]))) {
                            _result = true;
                        }
                        break;
                }
                if (!_result && this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidCheckNumber'));
                }
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TaxpayerCode;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class TaxpayerRegistrationReasonCode extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            invalidFormat: 'КПП должен состоять только из 9 знаков (цифр или заглавных букв латинского алфавита от A до Z)',
            invalidType: 'Неправильный тип значения КПП'
        });
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            if (typeof val === 'number') {
                val = val.toString();
            }
            if (typeof val !== 'string') {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidType'));
                }
            } else if (!/^[0-9]{4}[0-9A-Z]{2}[0-9]{3}$/.test(val)) {
                if (this._checkResult(result)) {
                    result.errors().add(this.errorsTemplates().get('invalidFormat'));
                }
            } else {
                _result = true;
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TaxpayerRegistrationReasonCode;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type__ = __webpack_require__(2);


class InfinityType extends __WEBPACK_IMPORTED_MODULE_0__Type__["a" /* Type */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является бесконечностью'});
    }

    validate(val, result = null) {
        return super._validate(val === Infinity, result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InfinityType;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type__ = __webpack_require__(2);


class NaNType extends __WEBPACK_IMPORTED_MODULE_0__Type__["a" /* Type */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является NaN'});
    }

    validate(val, result = null) {
        return super._validate(val !== val, result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NaNType;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type__ = __webpack_require__(2);


class NullType extends __WEBPACK_IMPORTED_MODULE_0__Type__["a" /* Type */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является null'});
    }

    validate(val, result = null) {
        return super._validate(val === null, result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NullType;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type__ = __webpack_require__(2);


class ObjectType extends __WEBPACK_IMPORTED_MODULE_0__Type__["a" /* Type */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является объектом'});
    }

    validate(val, result = null) {
        return super._validate((typeof val === 'object') && (val !== null), result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ObjectType;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type__ = __webpack_require__(2);


class StringType extends __WEBPACK_IMPORTED_MODULE_0__Type__["a" /* Type */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является строкой'});
    }

    validate(val, result = null) {
        return super._validate(typeof val === 'string', result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StringType;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type__ = __webpack_require__(2);


class UndefinedType extends __WEBPACK_IMPORTED_MODULE_0__Type__["a" /* Type */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является undefined'});
    }

    validate(val, result = null) {
        return super._validate(typeof val === 'undefined', result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UndefinedType;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class FloatVal extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение должно быть числом с плавающей точкой'});
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            _result = (((typeof val === 'number') || (typeof val === 'string')) && /^\-?[0-9]*\.?[0-9]+$/.test(val.toString()));
            if (!_result && this._checkResult(result)) {
                result.errors().add(this.errorsTemplates().get('invalid'));
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FloatVal;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);


class IntVal extends __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */] {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение должно быть целым числом'});
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            _result = (((typeof val === 'number') || (typeof val === 'string')) && /^\-?[0-9]+$/.test(val.toString()));
            if (!_result && this._checkResult(result)) {
                result.errors().add(this.errorsTemplates().get('invalid'));
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IntVal;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesClassesMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CompositeRule_AllOf__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CompositeRule_AnyOf__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CompositeRule_NoneOf__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CompositeRule_OneOf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Rule_AlwaysInvalid__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Rule_AlwaysValid__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Rule_Interval__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Rule_NotEmpty__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Rule_Pattern__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Rule_Type__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Rule_Interval_FloatInterval__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Rule_Interval_IntInterval__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Rule_Interval_Length__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Rule_Pattern_No__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Rule_Pattern_Yes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Rule_Scheme_BankAccount__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Rule_Scheme_BankCode__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Rule_Scheme_CorrespondentAccount__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Rule_Scheme_EntrepreneurCode__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Rule_Scheme_LegalEntityCode__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Rule_Scheme_SocialInsuranceCode__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Rule_Scheme_TaxpayerCode__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Rule_Scheme_TaxpayerRegistrationReasonCode__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Rule_Type_BoolType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Rule_Type_InfinityType__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Rule_Type_NaNType__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Rule_Type_NullType__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Rule_Type_NumberType__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Rule_Type_ObjectType__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Rule_Type_StringType__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Rule_Type_UndefinedType__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Rule_Val_FloatVal__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Rule_Val_IntVal__ = __webpack_require__(37);








































let RulesClassesMap = {
    'AllOf': __WEBPACK_IMPORTED_MODULE_0__CompositeRule_AllOf__["a" /* AllOf */],
    'AnyOf': __WEBPACK_IMPORTED_MODULE_1__CompositeRule_AnyOf__["a" /* AnyOf */],
    'NoneOf': __WEBPACK_IMPORTED_MODULE_2__CompositeRule_NoneOf__["a" /* NoneOf */],
    'OneOf': __WEBPACK_IMPORTED_MODULE_3__CompositeRule_OneOf__["a" /* OneOf */],
    // ----
    'AlwaysInvalid': __WEBPACK_IMPORTED_MODULE_4__Rule_AlwaysInvalid__["a" /* AlwaysInvalid */],
    'AlwaysValid': __WEBPACK_IMPORTED_MODULE_5__Rule_AlwaysValid__["a" /* AlwaysValid */],
    'Interval': __WEBPACK_IMPORTED_MODULE_6__Rule_Interval__["a" /* Interval */],
    'NotEmpty': __WEBPACK_IMPORTED_MODULE_7__Rule_NotEmpty__["a" /* NotEmpty */],
    'Pattern': __WEBPACK_IMPORTED_MODULE_8__Rule_Pattern__["a" /* Pattern */],
    'Type': __WEBPACK_IMPORTED_MODULE_9__Rule_Type__["a" /* Type */],
    // ----
    'Interval.Float': __WEBPACK_IMPORTED_MODULE_10__Rule_Interval_FloatInterval__["a" /* FloatInterval */],
    'Interval.Int': __WEBPACK_IMPORTED_MODULE_11__Rule_Interval_IntInterval__["a" /* IntInterval */],
    'Length': __WEBPACK_IMPORTED_MODULE_12__Rule_Interval_Length__["a" /* Length */],
    // ----
    'Pattern.No': __WEBPACK_IMPORTED_MODULE_13__Rule_Pattern_No__["a" /* No */],
    'Pattern.Yes': __WEBPACK_IMPORTED_MODULE_14__Rule_Pattern_Yes__["a" /* Yes */],
    // ----
    'Scheme.BankAccount': __WEBPACK_IMPORTED_MODULE_15__Rule_Scheme_BankAccount__["a" /* BankAccount */],
    'Scheme.BankCode': __WEBPACK_IMPORTED_MODULE_16__Rule_Scheme_BankCode__["a" /* BankCode */],
    'Scheme.CorrespondentAccount': __WEBPACK_IMPORTED_MODULE_17__Rule_Scheme_CorrespondentAccount__["a" /* CorrespondentAccount */],
    'Scheme.EntrepreneurCode': __WEBPACK_IMPORTED_MODULE_18__Rule_Scheme_EntrepreneurCode__["a" /* EntrepreneurCode */],
    'Scheme.LegalEntityCode': __WEBPACK_IMPORTED_MODULE_19__Rule_Scheme_LegalEntityCode__["a" /* LegalEntityCode */],
    'Scheme.SocialInsuranceCode': __WEBPACK_IMPORTED_MODULE_20__Rule_Scheme_SocialInsuranceCode__["a" /* SocialInsuranceCode */],
    'Scheme.TaxpayerCode': __WEBPACK_IMPORTED_MODULE_21__Rule_Scheme_TaxpayerCode__["a" /* TaxpayerCode */],
    'Scheme.TaxpayerRegistrationReasonCode': __WEBPACK_IMPORTED_MODULE_22__Rule_Scheme_TaxpayerRegistrationReasonCode__["a" /* TaxpayerRegistrationReasonCode */],
    // ----
    'Type.Bool': __WEBPACK_IMPORTED_MODULE_23__Rule_Type_BoolType__["a" /* BoolType */],
    'Type.Infinity': __WEBPACK_IMPORTED_MODULE_24__Rule_Type_InfinityType__["a" /* InfinityType */],
    'Type.NaN': __WEBPACK_IMPORTED_MODULE_25__Rule_Type_NaNType__["a" /* NaNType */],
    'Type.Null': __WEBPACK_IMPORTED_MODULE_26__Rule_Type_NullType__["a" /* NullType */],
    'Type.Number': __WEBPACK_IMPORTED_MODULE_27__Rule_Type_NumberType__["a" /* NumberType */],
    'Type.Object': __WEBPACK_IMPORTED_MODULE_28__Rule_Type_ObjectType__["a" /* ObjectType */],
    'Type.String': __WEBPACK_IMPORTED_MODULE_29__Rule_Type_StringType__["a" /* StringType */],
    'Type.Undefined': __WEBPACK_IMPORTED_MODULE_30__Rule_Type_UndefinedType__["a" /* UndefinedType */],
    // ----
    'Val.Float': __WEBPACK_IMPORTED_MODULE_32__Rule_Val_IntVal__["a" /* IntVal */],
    'Val.Int': __WEBPACK_IMPORTED_MODULE_32__Rule_Val_IntVal__["a" /* IntVal */],
    'Val.String': __WEBPACK_IMPORTED_MODULE_29__Rule_Type_StringType__["a" /* StringType */],
    // ----
    'Float': __WEBPACK_IMPORTED_MODULE_31__Rule_Val_FloatVal__["a" /* FloatVal */],
    'Int': __WEBPACK_IMPORTED_MODULE_32__Rule_Val_IntVal__["a" /* IntVal */],
    'String': __WEBPACK_IMPORTED_MODULE_29__Rule_Type_StringType__["a" /* StringType */]
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Rule_Type_BoolType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Rule_Type_NumberType__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_CompositeRule_AllOf__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_CompositeRule_AnyOf__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_CompositeRule_NoneOf__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_CompositeRule_OneOf__ = __webpack_require__(14);




QUnit.test('CompositeRule/AllOf', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_2__src_CompositeRule_AllOf__["a" /* AllOf */]([
        new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Type_NumberType__["a" /* NumberType */](),
        new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Type_NumberType__["a" /* NumberType */]()
    ]);
    assert.ok(rule.validate(42) === true);
    assert.ok(rule.validate('') === false);
});


QUnit.test('CompositeRule/AnyOf', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_3__src_CompositeRule_AnyOf__["a" /* AnyOf */]([
        new __WEBPACK_IMPORTED_MODULE_0__src_Rule_Type_BoolType__["a" /* BoolType */](),
        new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Type_NumberType__["a" /* NumberType */]()
    ]);
    assert.ok(rule.validate(42) === true);
    assert.ok(rule.validate(true) === true);
    assert.ok(rule.validate('') === false);
});


QUnit.test('CompositeRule/NoneOf', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_4__src_CompositeRule_NoneOf__["a" /* NoneOf */]([
        new __WEBPACK_IMPORTED_MODULE_0__src_Rule_Type_BoolType__["a" /* BoolType */](),
        new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Type_NumberType__["a" /* NumberType */]()
    ]);
    assert.ok(rule.validate(42) === false);
    assert.ok(rule.validate(true) === false);
    assert.ok(rule.validate('') === true);
});


QUnit.test('CompositeRule/OneOf', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_5__src_CompositeRule_OneOf__["a" /* OneOf */]([
        new __WEBPACK_IMPORTED_MODULE_0__src_Rule_Type_BoolType__["a" /* BoolType */](),
        new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Type_NumberType__["a" /* NumberType */]()
    ]);
    assert.ok(rule.validate(42) === true);
    assert.ok(rule.validate(true) === true);
    assert.ok(rule.validate('') === false);

    rule.rules().add(new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Type_NumberType__["a" /* NumberType */]());
    assert.ok(rule.validate(42) === false);
    assert.ok(rule.validate(true) === true);
    assert.ok(rule.validate('') === false);
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Error__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Result__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Rule__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Utils__ = __webpack_require__(1);





QUnit.test('Error', function (assert) {
    var error = new __WEBPACK_IMPORTED_MODULE_0__src_Error__["a" /* Error */]();

    assert.ok(error.getCode() === null);
    assert.ok(error.getMessage() === null);
    assert.ok(error.getRawMessage() === null);
    assert.ok(error.getReplacements() === null);
    error.setCode('test')
        .setMessage('Code {2}; message: {0}')
        .setReplacements(['Test', 'default', 42]);
    assert.ok(error.getCode() === 'test');
    assert.ok(error.getMessage() === 'Code 42; message: Test');
    assert.ok(error.getRawMessage() === 'Code {2}; message: {0}');
    assert.ok(__WEBPACK_IMPORTED_MODULE_3__src_Utils__["a" /* Utils */].isArray(error.getReplacements()));
});

QUnit.test('Errors', function (assert) {
    var result = new __WEBPACK_IMPORTED_MODULE_1__src_Result__["a" /* Result */]();

    var error1 = new __WEBPACK_IMPORTED_MODULE_0__src_Error__["a" /* Error */]();
    error1.setCode('test1');
    var error2 = new __WEBPACK_IMPORTED_MODULE_0__src_Error__["a" /* Error */]();
    error2.setCode('test2');
    var error3 = new __WEBPACK_IMPORTED_MODULE_0__src_Error__["a" /* Error */]();
    error3.setCode('test3');

    assert.ok(result.errors().has() === false);
    result.errors().add(error1);
    assert.ok(result.errors().has() === true);
    result.errors().remove();
    assert.ok(result.errors().has() === false);
    assert.ok(result.errors().getFirst() === null);
    assert.ok(result.errors().getLast() === null);

    result.errors().set([error1, error2, error3]);
    assert.ok(result.errors().has() === true);
    assert.ok(result.errors().getFirst().getCode() === 'test1');
    assert.ok(result.errors().getLast().getCode() === 'test3');

    result.errors().forEach(function (error, index) {
        if (index === 1) {
            this.errors.splice(index, 1);
        }
    });
    assert.ok(result.errors().has() === true);
    assert.ok(result.errors().getFirst().getCode() === 'test1');
    assert.ok(result.errors().getLast().getCode() === 'test3');
});

QUnit.test('ErrorsTemplates', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_2__src_Rule__["a" /* Rule */]();

    var error1 = new __WEBPACK_IMPORTED_MODULE_0__src_Error__["a" /* Error */]();
    error1.setCode('test1');
    var error2 = new __WEBPACK_IMPORTED_MODULE_0__src_Error__["a" /* Error */]();
    error2.setCode('test2');
    var error3 = new __WEBPACK_IMPORTED_MODULE_0__src_Error__["a" /* Error */]();
    error3.setCode('test3');

    assert.ok(rule.errorsTemplates().has() === false);
    assert.ok(rule.errorsTemplates().has('test1') === false);
    rule.errorsTemplates().add('test1', error1);
    assert.ok(rule.errorsTemplates().has() === true);
    assert.ok(rule.errorsTemplates().has('test1') === true);
    rule.errorsTemplates().remove();
    assert.ok(rule.errorsTemplates().has() === false);
    assert.ok(rule.errorsTemplates().has('test1') === false);

    rule.errorsTemplates().set({
        'test1': error1,
        'test2': error2,
        'test3': error3
    });
    assert.ok(rule.errorsTemplates().has() === true);
    assert.ok(rule.errorsTemplates().has('test1') === true);
    assert.ok(rule.errorsTemplates().has('test2') === true);
    assert.ok(rule.errorsTemplates().has('test3') === true);
    rule.errorsTemplates().forEach(function (error, name) {
        if (name === 'test2') {
            this.remove(name);
        }
    });
    assert.ok(rule.errorsTemplates().has() === true);
    assert.ok(rule.errorsTemplates().has('test1') === true);
    assert.ok(rule.errorsTemplates().has('test2') === false);
    assert.ok(rule.errorsTemplates().has('test3') === true);

    rule.errorsTemplates().remove();
    assert.ok(rule.errorsTemplates().has() === false);
    assert.ok(rule.errorsTemplates().has('test1') === false);
    assert.ok(rule.errorsTemplates().has('test3') === false);
});

QUnit.test('Params', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_2__src_Rule__["a" /* Rule */]();

    assert.ok(rule.params().has() === false);
    assert.ok(rule.params().has('min') === false);
    assert.ok(rule.params().get('min') === null);
    rule.params().add('min', 10);
    assert.ok(rule.params().has() === true);
    assert.ok(rule.params().has('min') === true);
    assert.ok(rule.params().get('min') === 10);

    assert.ok(rule.params().has('max') === false);
    assert.ok(rule.params().get('max') === null);
    rule.params().add({
        'min': 25,
        'max': 100
    });
    assert.ok(rule.params().has('min') === true);
    assert.ok(rule.params().has('max') === true);
    assert.ok(rule.params().get('min') === 25);
    assert.ok(rule.params().get('max') === 100);

    var i = 0;
    rule.params().forEach(function (val, name) {
        i++;
        if (name === 'max') {
            this.set('max', 42);
        }
        if (name === 'min') {
            this.remove(name);
        }
    });
    assert.ok(i === 2);
    assert.ok(rule.params().has('min') === false);
    assert.ok(rule.params().has('max') === true);
    assert.ok(rule.params().get('min') === null);
    assert.ok(rule.params().get('max') === 42);

    assert.ok(rule.params().has('flag') === false);
    assert.ok(rule.params().get('flag') === null);
    rule.params().set({'flag': 3.14});
    assert.ok(rule.params().has('flag') === true);
    assert.ok(rule.params().get('flag') === 3.14);
    assert.ok(rule.params().has('max') === false);
    assert.ok(rule.params().get('max') === null);

    assert.ok(rule.params().has() === true);
    rule.params().remove();
    assert.ok(rule.params().has() === false);
    assert.ok(rule.params().has('flag') === false);
    assert.ok(rule.params().get('flag') === null);
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Validator__ = __webpack_require__(56);
console.log('Example 1 >>>');



var validator = new __WEBPACK_IMPORTED_MODULE_0__src_Validator__["a" /* Validator */]();
validator.setRules({
    id: ['NotEmpty', 'Int'],
    link: [['Length', {max: 255, min: 5}]],
    'name.brief': ['NotEmpty', 'String', ['Length', {max: 10}]],
    'name.full': ['NotEmpty', 'String', ['Length', {max: 255, min: 10}]]
});

console.log('--- Test 1');
validator.setVals({
    id: 3.14,
    'name.brief': '12345678901',
    'name.full': '12345'
});
console.log(validator.validate());
var results = validator.getResults();
for (var fieldName in results) {
    console.log(fieldName + ': ' + results[fieldName].get());
    results[fieldName].errors().forEach(function (error) {
        console.log(error.getMessage());
    });
}

console.log('--- Test 2');
validator.setVals({
    id: 42,
    link: '/test/',
    'name.brief': 'Кратко',
    'name.full': 'Полное название'
});
console.log(validator.validate());
var results = validator.getResults();
for (var fieldName in results) {
    console.log(fieldName + ': ' + results[fieldName].get());
    results[fieldName].errors().forEach(function (error) {
        console.log(error.getMessage());
    });
}

console.log('<<< Example 1');

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Rule__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_RulesClassesMap__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Rule_AlwaysInvalid__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Rule_AlwaysValid__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Rule_NotEmpty__ = __webpack_require__(20);


QUnit.test('RulesClassesMap', function (assert) {
    for (var ruleClassName in __WEBPACK_IMPORTED_MODULE_1__src_RulesClassesMap__["a" /* RulesClassesMap */]) {
        var rule = new __WEBPACK_IMPORTED_MODULE_1__src_RulesClassesMap__["a" /* RulesClassesMap */][ruleClassName]();
        assert.ok(rule instanceof __WEBPACK_IMPORTED_MODULE_0__src_Rule__["a" /* Rule */]);
    }
});


QUnit.test('Rule/AlwaysInvalid', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_2__src_Rule_AlwaysInvalid__["a" /* AlwaysInvalid */]();
    assert.ok(rule.validate() === false);
});


QUnit.test('Rule/AlwaysValid', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_3__src_Rule_AlwaysValid__["a" /* AlwaysValid */]();
    assert.ok(rule.validate() === true);
});


QUnit.test('Rule/NotEmpty', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_4__src_Rule_NotEmpty__["a" /* NotEmpty */]();
    var tests = [
        [true, [true, false, 0, 0.0, ' ', [0], {}]],
        [false, [null, '', []]]
    ];
    for (var i in tests) {
        for (var j in tests[i][1]) {
            assert.ok(rule.validate(tests[i][1][j]) === tests[i][0]);
        }
    }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Rule_Interval_FloatInterval__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Rule_Interval_IntInterval__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Rule_Interval_Length__ = __webpack_require__(19);
var executeTests = function (assert, rule, tests, result) {
    for (var i in tests) {
        assert.ok(rule.validate(tests[i]) === result);
    }
};


QUnit.test('Rule/Interval/FloatInterval', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_0__src_Rule_Interval_FloatInterval__["a" /* FloatInterval */]();

    executeTests(assert, rule, [4.2, -4.2, .42, -.42, '4.2', '-4.2', '.42', '-.42', 42, -42, '42', '-42'], true);
    executeTests(assert, rule, ['Abc', {}], false);

    rule.params().set('min', 10.5);
    executeTests(assert, rule, [10.4], false);
    executeTests(assert, rule, [10.5, 10.6], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [10.4, 10.5], false);
    executeTests(assert, rule, [10.6], true);

    rule.params().set('max', 20.5);
    executeTests(assert, rule, [20.4, 20.5], true);
    executeTests(assert, rule, [20.6], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [20.4], true);
    executeTests(assert, rule, [20.5, 20.6], false);

    rule.params().set({
        min: -20.5,
        minInclusive: true
    });
    executeTests(assert, rule, [-20.6], false);
    executeTests(assert, rule, [-20.5, -20.4], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [-20.6, -20.5], false);
    executeTests(assert, rule, [-20.4], true);

    rule.params().set({
        max: -10.5,
        maxInclusive: true
    });
    executeTests(assert, rule, [-10.6, -10.5], true);
    executeTests(assert, rule, [-10.4], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [-10.6], true);
    executeTests(assert, rule, [-10.5, -10.4], false);
});


QUnit.test('Rule/Interval/IntInterval', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Interval_IntInterval__["a" /* IntInterval */]();

    executeTests(assert, rule, [42, -42, '42', '-42'], true);
    executeTests(assert, rule, [4.2, 'Abc', {}], false);

    rule.params().set('min', 10);
    executeTests(assert, rule, [9], false);
    executeTests(assert, rule, [10, 11], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [9, 10], false);
    executeTests(assert, rule, [11], true);

    rule.params().set('max', 20);
    executeTests(assert, rule, [19, 20], true);
    executeTests(assert, rule, [21], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [19], true);
    executeTests(assert, rule, [20, 21], false);

    rule.params().set({
        min: -20,
        minInclusive: true
    });
    executeTests(assert, rule, [-21], false);
    executeTests(assert, rule, [-20, -19], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [-21, -20], false);
    executeTests(assert, rule, [-19], true);

    rule.params().set({
        max: -10,
        maxInclusive: true
    });
    executeTests(assert, rule, [-11, -10], true);
    executeTests(assert, rule, [-9], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [-11], true);
    executeTests(assert, rule, [-10, -9], false);
});


QUnit.test('Rule/Interval/Length', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_2__src_Rule_Interval_Length__["a" /* Length */]();

    executeTests(assert, rule, [42, -42, '42', '-42', 4.2, -4.2, '4.2', '-4.2', [], [42, '-4.2']], true);
    executeTests(assert, rule, [{}], false);

    rule.params().set('min', 2);
    executeTests(assert, rule, [1, '', 'А', [], [42]], false);
    executeTests(assert, rule, [42, 314, 'Аб', 'АбВ', [42, '-4.2'], [42, '-4.2', '']], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [1, 42, '', 'А', 'Аб', [], [42], [42, '-4.2']], false);
    executeTests(assert, rule, [314, 'АбВ', [42, '-4.2', '']], true);

    rule.params().remove('min');
    rule.params().remove('minInclusive');
    rule.params().set('max', 2);
    executeTests(assert, rule, [1, 42, '', 'А', 'Аб', [], [42], [42, '-4.2']], true);
    executeTests(assert, rule, [314, 'АбВ', [42, '-4.2', '']], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [1, '', 'А', [], [42]], true);
    executeTests(assert, rule, [42, 314, 'Аб', 'АбВ', [42, '-4.2'], [42, '-4.2', '']], false);
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Rule_Pattern__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Rule_Pattern_No__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Rule_Pattern_Yes__ = __webpack_require__(22);

QUnit.test('Rule/Pattern', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_0__src_Rule_Pattern__["a" /* Pattern */]();
    var tests = [
        [42, true],
        [3.14, false],
        ['Abc', false]
    ];

    for (var i in tests) {
        assert.ok(rule.validate(tests[i][0]) === true);
    }

    rule.params().set('pattern', '^[0-9]+$');
    for (var i in tests) {
        assert.ok(rule.validate(tests[i][0]) === tests[i][1]);
    }
});


QUnit.test('Rule/Pattern/No', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Pattern_No__["a" /* No */]();
    var tests = [
        [true, [null, 'no', 'No', 'NO', 'нет', 'Нет', 'НЕТ']],
        [false, [42, 'yes', 'Yes', 'YES', 'да', 'Да', 'ДА']]
    ];
    for (var i in tests) {
        for (var j in tests[i][1]) {
            assert.ok(rule.validate(tests[i][1][j]) === tests[i][0]);
        }
    }
});


QUnit.test('Rule/Pattern/Yes', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_2__src_Rule_Pattern_Yes__["a" /* Yes */]();
    var tests = [
        [true, [null, 'yes', 'Yes', 'YES', 'да', 'Да', 'ДА']],
        [false, [42, 'no', 'No', 'NO', 'нет', 'Нет', 'НЕТ']]
    ];
    for (var i in tests) {
        for (var j in tests[i][1]) {
            assert.ok(rule.validate(tests[i][1][j]) === tests[i][0]);
        }
    }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Result__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Rule_Scheme_BankAccount__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Rule_Scheme_BankCode__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Rule_Scheme_CorrespondentAccount__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Rule_Scheme_EntrepreneurCode__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Rule_Scheme_LegalEntityCode__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Rule_Scheme_SocialInsuranceCode__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Rule_Scheme_TaxpayerCode__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Rule_Scheme_TaxpayerRegistrationReasonCode__ = __webpack_require__(29);


var executeTests1 = function (assert, rule, tests) {
    for (var i in tests) {
        var test = tests[i];
        var result = new __WEBPACK_IMPORTED_MODULE_0__src_Result__["a" /* Result */]();
        var isValid = rule.validate(test[0], result);
        assert.ok(isValid === test[1], i + '.1) ' + test[0]);
        assert.ok(result.get() === test[1], i + '.2) ' + test[0]);
        if (isValid) {
            assert.ok(result.errors().getFirst() === test[2], i + '.3.1) ' + test[0]);
        } else {
            assert.ok(result.errors().getFirst().getCode() === test[2], i + '.3.2) ' + test[0]);
        }
    }
};

var executeTests2 = function (assert, rule, tests) {
    for (var i in tests) {
        var test = tests[i];
        var result = new __WEBPACK_IMPORTED_MODULE_0__src_Result__["a" /* Result */]();
        if (test.length === 4) {
            rule.params().set('bankCode', test[1]);
            var isValid = rule.validate(test[0], result);
            assert.ok(isValid === test[2], i + '.1) ' + test[0]);
            assert.ok(result.get() === test[2], i + '.2) ' + test[0]);
            if (isValid) {
                assert.ok(result.errors().getFirst() === test[3], i + '.3.1) ' + test[0]);
            } else {
                assert.ok(result.errors().getFirst().getCode() === test[3], i + '.3.2) ' + test[0]);
            }
        } else {
            rule.params().set('bankCode', '000000000');
            var isValid = rule.validate(test[0], result);
            assert.ok(isValid === test[1], i + '.1) ' + test[0]);
            assert.ok(result.get() === test[1], i + '.2) ' + test[0]);
            if (isValid) {
                assert.ok(result.errors().getFirst() === test[2], i + '.3.1) ' + test[0]);
            } else {
                assert.ok(result.errors().getFirst().getCode() === test[2], i + '.3.2) ' + test[0]);
            }
        }
    }
};

var getTests = function (invalidType = 'invalidType', invalidFormat = 'invalidFormat') {
    return [
        [{}, false, invalidType],
        // ----
        [null, true, null],
        ['', true, null],
        [[], true, null],
        // ----
        [0, false, invalidFormat],
        [0., false, invalidFormat],
        [0.0, false, invalidFormat],
        [.0, false, invalidFormat],
        ['0', false, invalidFormat],
        ['0.', false, invalidFormat],
        ['0.0', false, invalidFormat],
        ['.0', false, invalidFormat],
        [1, false, invalidFormat],
        [1., false, invalidFormat],
        [1.0, false, invalidFormat],
        [.1, false, invalidFormat],
        ['1', false, invalidFormat],
        ['1.', false, invalidFormat],
        ['1.1', false, invalidFormat],
        ['.1', false, invalidFormat],
        // ----
        [' ', false, invalidFormat],
        ['-42', false, invalidFormat],
        ['b42', false, invalidFormat],
        ['б42', false, invalidFormat]
    ];
};


QUnit.test('Rule/Scheme/BankAccount', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Scheme_BankAccount__["a" /* BankAccount */]();
    executeTests2(assert, rule, [].concat(getTests(), [
        ['0000000000000000000', '000000000', false, 'invalidFormat'],
        ['0123456789012345678', '000000000', false, 'invalidFormat'],
        ['1234567890123456789', '000000000', false, 'invalidFormat'],
        ['00000000000000000000', '000000000', true, null],
        ['01234567890123456789', '000000000', false, 'invalidCheckNumber'],
        ['12345678901234567890', '000000000', false, 'invalidCheckNumber'],
        ['000000000000000000000', '000000000', false, 'invalidFormat'],
        ['012345678901234567890', '000000000', false, 'invalidFormat'],
        ['123456789012345678901', '000000000', false, 'invalidFormat'],
        // ----
        ['40702810900000002851', '044030827', true, null],
        ['50702810900000002851', '044030827', false, 'invalidCheckNumber'],
        ['40802810900000002851', '044030827', false, 'invalidCheckNumber'],
        ['40703810900000002851', '044030827', false, 'invalidCheckNumber'],
        ['40702820900000002851', '044030827', false, 'invalidCheckNumber'],
        ['40702810000000002851', '044030827', false, 'invalidCheckNumber'],
        ['40702810901000002851', '044030827', false, 'invalidCheckNumber'],
        ['40702810900010002851', '044030827', false, 'invalidCheckNumber'],
        ['40702810900000102851', '044030827', false, 'invalidCheckNumber'],
        ['40702810900000003851', '044030827', false, 'invalidCheckNumber'],
        ['40702810900000002861', '044030827', false, 'invalidCheckNumber']
    ]));
});


QUnit.test('Rule/Scheme/BankCode', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_2__src_Rule_Scheme_BankCode__["a" /* BankCode */]();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['01234567', false, 'invalidFormat'],
        ['12345678', false, 'invalidFormat'],
        ['000000000', true, null],
        ['012345678', true, null],
        ['123456789', true, null],
        ['0123456789', false, 'invalidFormat'],
        ['1234567890', false, 'invalidFormat']
    ]));
});


QUnit.test('Rule/Scheme/CorrespondentAccount', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_3__src_Rule_Scheme_CorrespondentAccount__["a" /* CorrespondentAccount */]();
    executeTests2(assert, rule, [].concat(getTests(), [
        ['0000000000000000000', '000000000', false, 'invalidFormat'],
        ['0123456789012345678', '000000000', false, 'invalidFormat'],
        ['1234567890123456789', '000000000', false, 'invalidFormat'],
        ['00000000000000000000', '000000000', true, null],
        ['01234567890123456789', '000000000', false, 'invalidCheckNumber'],
        ['12345678901234567890', '000000000', false, 'invalidCheckNumber'],
        ['000000000000000000000', '000000000', false, 'invalidFormat'],
        ['012345678901234567890', '000000000', false, 'invalidFormat'],
        ['123456789012345678901', '000000000', false, 'invalidFormat'],
        // ----
        ['30101810200000000827', '044030827', true, null],
        ['40101810200000000827', '044030827', false, 'invalidCheckNumber'],
        ['30201810200000000827', '044030827', false, 'invalidCheckNumber'],
        ['30102810200000000827', '044030827', false, 'invalidCheckNumber'],
        ['30101820200000000827', '044030827', false, 'invalidCheckNumber'],
        ['30101810400000000827', '044030827', false, 'invalidCheckNumber'],
        ['30101810201000000827', '044030827', false, 'invalidCheckNumber'],
        ['30101810200010000827', '044030827', false, 'invalidCheckNumber'],
        ['30101810200000100827', '044030827', false, 'invalidCheckNumber'],
        ['30101810200000001827', '044030827', false, 'invalidCheckNumber'],
        ['30101810200000000837', '044030827', false, 'invalidCheckNumber']
    ]));
});


QUnit.test('Rule/Scheme/EntrepreneurCode', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_4__src_Rule_Scheme_EntrepreneurCode__["a" /* EntrepreneurCode */]();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['00000000000000', false, 'invalidFormat'],
        ['01234567890123', false, 'invalidFormat'],
        ['12345678901234', false, 'invalidFormat'],
        ['000000000000000', true, null],
        ['012345678901234', false, 'invalidCheckNumber'],
        ['123456789012345', false, 'invalidCheckNumber'],
        ['0000000000000000', false, 'invalidFormat'],
        ['0123456789012345', false, 'invalidFormat'],
        ['1234567890123456', false, 'invalidFormat'],
        // ----
        ['307760324100018', true, null],
        ['407760324100018', false, 'invalidCheckNumber'],
        ['308760324100018', false, 'invalidCheckNumber'],
        ['307770324100018', false, 'invalidCheckNumber'],
        ['307760424100018', false, 'invalidCheckNumber'],
        ['307760325100018', false, 'invalidCheckNumber'],
        ['307760324110018', false, 'invalidCheckNumber'],
        ['307760324100118', false, 'invalidCheckNumber'],
        ['307760324100019', false, 'invalidCheckNumber']
    ]));
});


QUnit.test('Rule/Scheme/LegalEntityCode', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_5__src_Rule_Scheme_LegalEntityCode__["a" /* LegalEntityCode */]();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['000000000000', false, 'invalidFormat'],
        ['012345678901', false, 'invalidFormat'],
        ['123456789012', false, 'invalidFormat'],
        ['0000000000000', true, null],
        ['0123456789012', false, 'invalidCheckNumber'],
        ['1234567890123', false, 'invalidCheckNumber'],
        ['00000000000000', false, 'invalidFormat'],
        ['01234567890123', false, 'invalidFormat'],
        ['12345678901234', false, 'invalidFormat'],
        // ----
        ['1027812400868', true, null],
        ['2027812400868', false, 'invalidCheckNumber'],
        ['1037812400868', false, 'invalidCheckNumber'],
        ['1027912400868', false, 'invalidCheckNumber'],
        ['1027813400868', false, 'invalidCheckNumber'],
        ['1027812410868', false, 'invalidCheckNumber'],
        ['1027812400968', false, 'invalidCheckNumber'],
        ['1027812400869', false, 'invalidCheckNumber']
    ]));
});


QUnit.test('Rule/Scheme/SocialInsuranceCode', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_6__src_Rule_Scheme_SocialInsuranceCode__["a" /* SocialInsuranceCode */]();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['0000000000', false, 'invalidFormat'],
        ['0123456789', false, 'invalidFormat'],
        ['1234567890', false, 'invalidFormat'],
        ['00000000000', true, null],
        ['01234567890', false, 'invalidCheckNumber'],
        ['12345678901', false, 'invalidCheckNumber'],
        ['000000000000', false, 'invalidFormat'],
        ['012345678901', false, 'invalidFormat'],
        ['123456789012', false, 'invalidFormat'],
        // ----
        ['08765430300', true, null],
        ['18765430300', false, 'invalidCheckNumber'],
        ['08865430300', false, 'invalidCheckNumber'],
        ['08766430300', false, 'invalidCheckNumber'],
        ['08765440300', false, 'invalidCheckNumber'],
        ['08765430400', false, 'invalidCheckNumber'],
        ['08765430301', false, 'invalidCheckNumber']
    ]));
});


QUnit.test('Rule/Scheme/TaxpayerCode', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_7__src_Rule_Scheme_TaxpayerCode__["a" /* TaxpayerCode */]();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['000000000', false, 'invalidFormat'],
        ['012345678', false, 'invalidFormat'],
        ['123456789', false, 'invalidFormat'],
        ['0000000000', true, null],
        ['0123456789', false, 'invalidCheckNumber'],
        ['1234567890', false, 'invalidCheckNumber'],
        ['00000000000', false, 'invalidFormat'],
        ['01234567890', false, 'invalidFormat'],
        ['12345678901', false, 'invalidFormat'],
        ['000000000000', true, null],
        ['012345678901', false, 'invalidCheckNumber'],
        ['123456789012', false, 'invalidCheckNumber'],
        ['0000000000000', false, 'invalidFormat'],
        ['0123456789012', false, 'invalidFormat'],
        ['1234567890123', false, 'invalidFormat'],
        // ----
        ['7827004526', true, null],
        ['8827004526', false, 'invalidCheckNumber'],
        ['7837004526', false, 'invalidCheckNumber'],
        ['7827104526', false, 'invalidCheckNumber'],
        ['7827005526', false, 'invalidCheckNumber'],
        ['7827004536', false, 'invalidCheckNumber'],
        // ----
        ['760307073214', true, null],
        ['860307073214', false, 'invalidCheckNumber'],
        ['761307073214', false, 'invalidCheckNumber'],
        ['760317073214', false, 'invalidCheckNumber'],
        ['760307173214', false, 'invalidCheckNumber'],
        ['760307074214', false, 'invalidCheckNumber'],
        ['760307073224', false, 'invalidCheckNumber']
    ]));
});


QUnit.test('Rule/Scheme/TaxpayerRegistrationReasonCode', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_8__src_Rule_Scheme_TaxpayerRegistrationReasonCode__["a" /* TaxpayerRegistrationReasonCode */]();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['01234567', false, 'invalidFormat'],
        ['12345678', false, 'invalidFormat'],
        ['000000000', true, null],
        ['012345678', true, null],
        ['123456789', true, null],
        ['0123456789', false, 'invalidFormat'],
        ['1234567890', false, 'invalidFormat'],
        // ----
        ['0000AZ000', true, null],
        ['0000aZ000', false, 'invalidFormat'],
        ['0000A-000', false, 'invalidFormat']
    ]));
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Result__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Rule_Type_BoolType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Rule_Type_InfinityType__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Rule_Type_NaNType__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Rule_Type_NullType__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Rule_Type_NumberType__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Rule_Type_ObjectType__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Rule_Type_StringType__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Rule_Type_UndefinedType__ = __webpack_require__(35);


var executeTests = function (assert, rule, tests) {
    for (var i in tests) {
        for (var j in tests[i]) {
            var test = tests[i][j];
            var result = new __WEBPACK_IMPORTED_MODULE_0__src_Result__["a" /* Result */]();
            var isValid = rule.validate(test[0], result);
            assert.ok(isValid === test[1], i + '.' + j + '.1) ' + test[0]);
            assert.ok(result.get() === test[1], i + '.' + j + '.2) ' + test[0]);
            if (isValid) {
                assert.ok(result.errors().getFirst() === test[2], i + '.' + j + '.3.1) ' + test[0]);
            } else {
                assert.ok(result.errors().getFirst().getCode() === test[2], i + '.' + j + '.3.2) ' + test[0]);
            }
        }
    }
};

var getTests = function (validType) {
    var tests = {
        'bool': [
            [true, false, 'invalid'],
            [false, false, 'invalid']
        ],
        'infinity': [[1 / 0, false, 'invalid']],
        'nan': [[parseInt(''), false, 'invalid']],
        'null': [[null, false, 'invalid']],
        'number': [
            [1, false, 'invalid'],
            [1.1, false, 'invalid']
        ],
        'object': [[{}, false, 'invalid']],
        'string': [['', false, 'invalid']],
        'undefined': [[undefined, false, 'invalid']]
    };
    var validTypes = (typeof validType === 'string') ? [validType] : validType;
    for (var i in validTypes) {
        if (typeof tests[validTypes[i]] !== 'undefined') {
            for (var j in tests[validTypes[i]]) {
                tests[validTypes[i]][j][1] = true;
                tests[validTypes[i]][j][2] = null;
            }
        }
    }
    return tests;
};


QUnit.test('Rule/Type/BoolType', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Type_BoolType__["a" /* BoolType */]();
    executeTests(assert, rule, getTests('bool'));
});


QUnit.test('Rule/Type/InfinityType', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_2__src_Rule_Type_InfinityType__["a" /* InfinityType */]();
    executeTests(assert, rule, getTests('infinity'));
});


QUnit.test('Rule/Type/NaNType', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_3__src_Rule_Type_NaNType__["a" /* NaNType */]();
    executeTests(assert, rule, getTests('nan'));
});


QUnit.test('Rule/Type/NullType', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_4__src_Rule_Type_NullType__["a" /* NullType */]();
    executeTests(assert, rule, getTests('null'));
});


QUnit.test('Rule/Type/NumberType', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_5__src_Rule_Type_NumberType__["a" /* NumberType */]();
    executeTests(assert, rule, getTests(['infinity', 'nan', 'number']));
});


QUnit.test('Rule/Type/ObjectType', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_6__src_Rule_Type_ObjectType__["a" /* ObjectType */]();
    executeTests(assert, rule, getTests('object'));
});


QUnit.test('Rule/Type/StringType', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_7__src_Rule_Type_StringType__["a" /* StringType */]();
    executeTests(assert, rule, getTests('string'));
});


QUnit.test('Rule/Type/UndefinedType', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_8__src_Rule_Type_UndefinedType__["a" /* UndefinedType */]();
    executeTests(assert, rule, getTests('undefined'));
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Result__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Rule_Val_FloatVal__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Rule_Val_IntVal__ = __webpack_require__(37);


var executeTests = function (assert, rule, tests) {
    for (var i in tests) {
        for (var j in tests[i]) {
            var test = tests[i][j];
            var result = new __WEBPACK_IMPORTED_MODULE_0__src_Result__["a" /* Result */]();
            var isValid = rule.validate(test[0], result);
            assert.ok(isValid === test[1], i + '.' + j + '.1) ' + test[0]);
            assert.ok(result.get() === test[1], i + '.' + j + '.2) ' + test[0]);
            if (isValid) {
                assert.ok(result.errors().getFirst() === test[2], i + '.' + j + '.3.1) ' + test[0]);
            } else {
                assert.ok(result.errors().getFirst().getCode() === test[2], i + '.' + j + '.3.2) ' + test[0]);
            }
        }
    }
};

var getTests = function (validType) {
    var tests = {
        'float': [
            [4.2, false, 'invalid'],
            [-4.2, false, 'invalid'],
            ['4.2', false, 'invalid'],
            ['-4.2', false, 'invalid'],
            [.2, false, 'invalid'],
            [-.2, false, 'invalid'],
            ['.2', false, 'invalid'],
            ['-.2', false, 'invalid'],
        ],
        'int': [
            [42, false, 'invalid'],
            [-42, false, 'invalid'],
            ['42', false, 'invalid'],
            ['-42', false, 'invalid']
        ]
    };
    var validTypes = (typeof validType === 'string') ? [validType] : validType;
    for (var i in validTypes) {
        if (typeof tests[validTypes[i]] !== 'undefined') {
            for (var j in tests[validTypes[i]]) {
                tests[validTypes[i]][j][1] = true;
                tests[validTypes[i]][j][2] = null;
            }
        }
    }
    return tests;
};


QUnit.test('Rule/Val/FloatVal', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_1__src_Rule_Val_FloatVal__["a" /* FloatVal */]();
    executeTests(assert, rule, getTests(['float', 'int']));
});


QUnit.test('Rule/Val/IntVal', function (assert) {
    var rule = new __WEBPACK_IMPORTED_MODULE_2__src_Rule_Val_IntVal__["a" /* IntVal */]();
    executeTests(assert, rule, getTests(['int']));
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(1);



class Errors {
    constructor() {
        this.errors = [];
    }

    /**
     * @param {Object} arg
     * Error
     * [Error, ...]
     * @returns {Errors}
     */
    add(arg) {
        if ((typeof arg === 'object') && (arg instanceof __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* Error */])) {
            this.errors.push(arg);
        } else if (__WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* Utils */].isArray(arg)) {
            arg.forEach(function (arg) {
                this.add(arg);
            }, this);
        } else {
            throw new TypeError('Параметр arg должен быть объектом класса Error либо массивом объектов класса Error');
        }
        return this;
    }

    /**
     * @param {Null|Number|String} code
     * @param {Null|String} message
     * @param {Null|Array} replacements
     * @returns {Error}
     */
    create(code = null, message = null, replacements = null) {
        return (new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* Error */]()).setCode(code)
            .setMessage(message)
            .setReplacements(replacements);
    }

    /**
     * @param {Function} callback
     * @returns {Errors}
     */
    forEach(callback) {
        if (typeof callback === 'function') {
            this.errors.forEach(callback, this);
        } else {
            throw new TypeError('Параметр callback должен быть функцией');
        }
        return this;
    }

    /**
     * @returns {Array}
     */
    get() {
        return this.errors;
    }

    /**
     * @returns {Null|Error}
     */
    getFirst() {
        return this.errors.length ? this.errors.slice(0, 1)[0] : null;
    }

    /**
     * @returns {Null|Error}
     */
    getLast() {
        return this.errors.length ? this.errors.slice(-1)[0] : null;
    }

    /**
     * @returns {Boolean}
     */
    has() {
        return this.errors.length ? true : false;
    }

    /**
     * @returns {Errors}
     */
    remove() {
        this.errors = [];
        return this;
    }

    /**
     * @param {Object} arg
     * Error
     * [Error, ...]
     * @returns {Errors}
     */
    set(arg) {
        return this.remove()
            .add(arg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Errors;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(1);



class ErrorsTemplates {
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
            if (__WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* Utils */].isArray(arg1)) {
                throw new TypeError('Параметр arg1 должен быть объектом');
            }
            for (var name in arg1) {
                this.add(name, arg1[name]);
            }
        } else if (typeof arg1 !== 'string') {
            throw new TypeError('Параметр arg1 должен быть строкой');
        } else if (typeof arg2 !== 'object') {
            throw new TypeError('Параметр arg2 должен быть объектом');
        } else if (!(arg2 instanceof __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* Error */])) {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = ErrorsTemplates;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Errors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(48);


let Errors = (Base) => class extends Base {
        constructor() {
            super();
            this.errorsClass = null;
        }

        /**
         * @returns {ErrorsClass}
         */
        errors() {
            return this.getErrorsClass();
        }

        /**
         * @returns {ErrorsClass}
         */
        getErrorsClass() {
            if (this.errorsClass === null) {
                this.errorsClass = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* Errors */]();
            }
            return this.errorsClass;
        }

        /**
         * @param {ErrorsClass} errorsClass
         * @returns {Base}
         */
        setErrorsClass(errorsClass) {
            if ((typeof errorsClass !== 'object') || !(errorsClass instanceof __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* Errors */])) {
                throw new TypeError('Класс должен быть наследником класса Errors');
            }
            this.errorsClass = errorsClass;
            return this;
        }
    };

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsTemplates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ErrorsTemplates__ = __webpack_require__(49);


let ErrorsTemplates = (Base) => class extends Base {
        constructor() {
            super();
            this.errorsTemplatesClass = null;
        }

        /**
         * @returns {ErrorsTemplatesClass}
         */
        errorsTemplates() {
            return this.getErrorsTemplatesClass();
        }

        /**
         * @returns {ErrorsTemplatesClass}
         */
        getErrorsTemplatesClass() {
            if (this.errorsTemplatesClass === null) {
                this.errorsTemplatesClass = new __WEBPACK_IMPORTED_MODULE_0__ErrorsTemplates__["a" /* ErrorsTemplates */]();
            }
            return this.errorsTemplatesClass;
        }

        /**
         * @param {ErrorsTemplatesClass} errorsTemplatesClass
         * @returns {Base}
         */
        setErrorsTemplatesClass(errorsTemplatesClass) {
            if ((typeof errorsTemplatesClass !== 'object') || !(errorsTemplatesClass instanceof __WEBPACK_IMPORTED_MODULE_0__ErrorsTemplates__["a" /* ErrorsTemplates */])) {
                throw new TypeError('Класс должен быть наследником класса ErrorsTemplates');
            }
            this.errorsTemplatesClass = errorsTemplatesClass;
            return this;
        }
    };

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Params; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Params__ = __webpack_require__(54);


let Params = (Base) => class extends Base {
        constructor() {
            super();
            this.paramsClass = null;
        }

        /**
         * @returns {ParamsClass}
         */
        getParamsClass() {
            if (this.paramsClass === null) {
                this.paramsClass = new __WEBPACK_IMPORTED_MODULE_0__Params__["a" /* Params */]();
            }
            return this.paramsClass;
        }

        /**
         * @returns {ParamsClass}
         */
        params() {
            return this.getParamsClass();
        }

        /**
         * @param {ParamsClass} paramsClass
         * @returns {Base}
         */
        setParamsClass(paramsClass) {
            if ((typeof paramsClass !== 'object') || !(paramsClass instanceof __WEBPACK_IMPORTED_MODULE_0__Params__["a" /* Params */])) {
                throw new TypeError('Класс должен быть наследником класса Params');
            }
            this.paramsClass = paramsClass;
            return this;
        }
    };

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rules__ = __webpack_require__(55);


let Rules = (Base) => class extends Base {
        constructor() {
            super();
            this.rulesClass = null;
        }

        /**
         * @returns {RulesClass}
         */
        getRulesClass() {
            if (this.rulesClass === null) {
                this.rulesClass = new __WEBPACK_IMPORTED_MODULE_0__Rules__["a" /* Rules */]();
            }
            return this.rulesClass;
        }

        /**
         * @returns {RulesClass}
         */
        rules() {
            return this.getRulesClass();
        }

        /**
         * @param {RulesClass} rulesClass
         * @returns {Base}
         */
        setRulesClass(rulesClass) {
            if ((typeof rulesClass !== 'object') || !(rulesClass instanceof __WEBPACK_IMPORTED_MODULE_0__Rules__["a" /* Rules */])) {
                throw new TypeError('Класс должен быть наследником класса Rules');
            }
            this.rulesClass = rulesClass;
            return this;
        }
    };

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils__ = __webpack_require__(1);


class Params {
    constructor() {
        this.params = {};
    }

    /**
     * @param {Object|String} arg1
     * @param {} arg2
     * @returns {Params}
     */
    add(arg1, arg2 = null) {
        if (typeof arg1 === 'object') {
            if (__WEBPACK_IMPORTED_MODULE_0__Utils__["a" /* Utils */].isArray(arg1)) {
                throw new TypeError('Параметр arg1 должен быть объектом');
            }
            for (var name in arg1) {
                this.add(name, arg1[name]);
            }
        } else if (typeof arg1 === 'string') {
            this.params[arg1] = arg2;
        } else {
            throw new TypeError('Параметр arg1 должен быть объектом либо строкой');
        }
        return this;
    }

    /**
     * @param {Function} callback
     * @returns {Params}
     */
    forEach(callback) {
        if (typeof callback === 'function') {
            for (var name in this.params) {
                callback.apply(this, [this.params[name], name]);
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
            return (typeof this.params[name] !== 'undefined') ? this.params[name] : defaultVal;
        } else if (name !== null) {
            throw new TypeError('Параметр name должен быть null либо строкой');
        }
        return this.params;
    }

    /**
     * @param {Null|String} name
     * @returns {Boolean}
     */
    has(name = null) {
        if (typeof name === 'string') {
            return (typeof this.params[name] !== 'undefined');
        } else if (name !== null) {
            throw new TypeError('Параметр name должен быть null либо строкой');
        }
        for (var name in this.params) {
            return true;
        }
        return false;
    }

    /**
     * @param {Null|String} name
     * @returns {Params}
     */
    remove(name = null) {
        if (typeof name === 'string') {
            if (typeof this.params[name] !== 'undefined') {
                delete this.params[name];
            }
        } else if (name === null) {
            this.params = {};
        } else {
            throw new TypeError('Параметр name должен быть null либо строкой');
        }
        return this;
    }

    /**
     * @param {Object|String} arg1
     * @param {} arg2
     * @returns {Params}
     */
    set(arg1, arg2 = null) {
        if (typeof arg1 === 'object') {
            this.remove();
        }
        return this.add(arg1, arg2);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Params;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rule__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(1);



class Rules {
    constructor() {
        this.rules = [];
    }

    /**
     * @param {Object} arg
     * Rule
     * [Rule, ...]
     * @returns {Rules}
     */
    add(arg) {
        if ((typeof arg === 'object') && (arg instanceof __WEBPACK_IMPORTED_MODULE_0__Rule__["a" /* Rule */])) {
            this.rules.push(arg);
        } else if (__WEBPACK_IMPORTED_MODULE_1__Utils__["a" /* Utils */].isArray(arg)) {
            arg.forEach(function (arg) {
                this.add(arg);
            }, this);
        } else {
            throw new TypeError('Параметр arg должен быть объектом класса Rule либо массивом объектов класса Rule');
        }
        return this;
    }

    /**
     * @param {Function} callback
     * @returns {Rules}
     */
    forEach(callback) {
        if (typeof callback === 'function') {
            this.rules.forEach(callback, this);
        } else {
            throw new TypeError('Параметр callback должен быть функцией');
        }
        return this;
    }

    /**
     * @returns {Array}
     */
    get() {
        return this.rules;
    }

    /**
     * @returns {Boolean}
     */
    has() {
        return this.rules.length ? true : false;
    }

    /**
     * @returns {Rules}
     */
    remove() {
        this.rules = [];
        return this;
    }

    /**
     * @param {Object} arg
     * Rule
     * [Rule, ...]
     * @returns {Rules}
     */
    set(arg) {
        return this.remove()
            .add(arg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rules;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Result__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rule__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RulesClassesMap__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils__ = __webpack_require__(1);





class Validator {
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
            var result = new __WEBPACK_IMPORTED_MODULE_0__Result__["a" /* Result */]();
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
            var result = new __WEBPACK_IMPORTED_MODULE_0__Result__["a" /* Result */]();
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
        } else if ((typeof result !== 'object') || !(result instanceof __WEBPACK_IMPORTED_MODULE_0__Result__["a" /* Result */])) {
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
        if (__WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* Utils */].isArray(rule)) {
            var compositeRuleClass = this.getRuleClass('AllOf');
            for (var i in rule) {
                if (typeof rule[i] === 'string') {
                    compositeRuleClass.rules().add(this.getRuleClass(rule[i]));
                } else if (__WEBPACK_IMPORTED_MODULE_3__Utils__["a" /* Utils */].isArray(rule[i]) && (typeof rule[i][0] === 'string') && (typeof rule[i][1] === 'object')) {
                    compositeRuleClass.rules().add(this.getRuleClass(rule[i][0], rule[i][1]));
                } else if ((typeof rule[i] === 'object') && rule[i] instanceof __WEBPACK_IMPORTED_MODULE_1__Rule__["a" /* Rule */]) {
                    compositeRuleClass.rules().add(rule[i]);
                } else {
                    throw new TypeError('Неправильный формат параметра rule (см. описание)');
                }
            }
            this.rules[fieldName] = compositeRuleClass;
        } else if (typeof rule === 'string') {
            this.rules[fieldName] = this.getRuleClass(rule);
        } else if (typeof rule === 'object') {
            if (rule instanceof __WEBPACK_IMPORTED_MODULE_1__Rule__["a" /* Rule */]) {
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
        } else if (typeof __WEBPACK_IMPORTED_MODULE_2__RulesClassesMap__["a" /* RulesClassesMap */][className] === 'undefined') {
            throw new Error('Класс отсутствует [' + className + ']');
        }
        return new __WEBPACK_IMPORTED_MODULE_2__RulesClassesMap__["a" /* RulesClassesMap */][className](params);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Validator;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Core__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rule__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Rule_Interval__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Rule_Pattern__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Rule_Scheme__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Rule_Type__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Rule_Val__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CompositeRule__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Example_1__ = __webpack_require__(41);













/***/ })
/******/ ]);