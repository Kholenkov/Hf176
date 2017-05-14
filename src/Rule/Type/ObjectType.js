import {Type} from '../Type';

export class ObjectType extends Type {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение не является объектом'});
    }

    validate(val, result = null) {
        return super._validate((typeof val === 'object') && (val !== null), result);
    }
}