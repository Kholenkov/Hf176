import {Rule} from '../../Rule';

export class SocialInsuranceCode extends Rule {
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