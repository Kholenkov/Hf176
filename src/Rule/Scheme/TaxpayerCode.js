import {Rule} from '../../Rule';

export class TaxpayerCode extends Rule {
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