import {Type} from '../Type';

export class NaNType extends Type {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является NaN'});
    }

    validate(val, result = null) {
        return super._validate(val !== val, result);
    }
}