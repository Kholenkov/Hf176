import {Type} from '../Type';

export class NumberType extends Type {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является числом'});
    }

    validate(val, result = null) {
        return super._validate(typeof val === 'number', result);
    }
}