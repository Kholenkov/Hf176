import {Rule} from '../Rule';
import {Utils} from '../Utils';

export class Pattern extends Rule {
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
                if (!Utils.isArray(patternFlags)) {
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