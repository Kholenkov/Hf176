import {Rule} from '../../Rule';

export class LegalEntityCode extends Rule {
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