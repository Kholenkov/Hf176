import {Type} from '../Type';

export class StringType extends Type {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является строкой'});
    }

    validate(val, result = null) {
        return super._validate(typeof val === 'string', result);
    }
}