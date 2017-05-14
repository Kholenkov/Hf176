import {Rule} from '../../Rule';

export class EntrepreneurCode extends Rule {
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