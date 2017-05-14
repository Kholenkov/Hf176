import {Rule} from '../Rule';

export class Interval extends Rule {
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