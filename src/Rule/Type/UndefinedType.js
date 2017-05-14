import {Type} from '../Type';

export class UndefinedType extends Type {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является undefined'});
    }

    validate(val, result = null) {
        return super._validate(typeof val === 'undefined', result);
    }
}