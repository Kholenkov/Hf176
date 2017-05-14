import {Interval} from '../Interval';

export class IntInterval extends Interval {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            mustGreater: 'Целое число должно быть строго больше {0}',
            mustGreaterOrEqual: 'Целое число должно быть больше либо равно {0}',
            mustLess: 'Целое число должно быть строго меньше {0}',
            mustLessOrEqual: 'Целое число должно быть меньше либо равно {0}'
        });
    }

    _checkValType(val) {
        if ((typeof val !== 'number') && (typeof val !== 'string')) {
            return false;
        }
        return /^\-?[0-9]+$/.test(val.toString());
    }

    _convertVal(val) {
        return parseInt(val);
    }
}