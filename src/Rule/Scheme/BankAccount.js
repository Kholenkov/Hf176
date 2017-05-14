import {BankCode} from './BankCode';
import {Rule} from '../../Rule';

export class BankAccount extends Rule {
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
            var bankCode = new BankCode();
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