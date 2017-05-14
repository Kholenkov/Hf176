import {Type} from '../Type';

export class InfinityType extends Type {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является бесконечностью'});
    }

    validate(val, result = null) {
        return super._validate(val === Infinity, result);
    }
}