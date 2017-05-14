import {Type} from '../Type';

export class NullType extends Type {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является null'});
    }

    validate(val, result = null) {
        return super._validate(val === null, result);
    }
}