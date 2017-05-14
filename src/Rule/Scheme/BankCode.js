import {Rule} from '../../Rule';

export class BankCode extends Rule {
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