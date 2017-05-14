import {Type} from '../Type';

export class BoolType extends Type {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является логическим'});
    }

    validate(val, result = null) {
        return super._validate(typeof val === 'boolean', result);
    }
}