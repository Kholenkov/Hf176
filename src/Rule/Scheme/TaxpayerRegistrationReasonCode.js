import {Rule} from '../../Rule';

export class TaxpayerRegistrationReasonCode extends Rule {
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