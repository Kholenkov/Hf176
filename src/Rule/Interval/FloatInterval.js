import {Interval} from '../Interval';

export class FloatInterval extends Interval {
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