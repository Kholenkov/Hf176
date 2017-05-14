import {Interval} from '../Interval';
import {Utils} from '../../Utils';

export class Length extends Interval {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({
            mustGreater: 'Длина должна быть строго больше {0}',
            mustGreaterOrEqual: 'Длина должна быть больше либо равна {0}',
            mustLess: 'Длина должна быть строго меньше {0}',
            mustLessOrEqual: 'Длина должна быть меньше либо равна {0}'
        });
    }

    _checkValType(val) {
        return ((typeof val === 'number') || (typeof val === 'string') || Utils.isArray(val));
    }

    _convertVal(val) {
        if (typeof val === 'number') {
            val = val.toString();
        }
        return val.length;
    }

    _valIsEmpty(val) {
        return (val === null);
    }
}