import {Rule} from '../Rule';

export class Type extends Rule {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Неправильный тип значения'});
    }

    _validate(isValid, result = null) {
        if (!isValid) {
            if (this._checkResult(result)) {
                result.set(false);
                result.errors().add(this.errorsTemplates().get('invalid'));
            }
            return false;
        }
        if (this._checkResult(result)) {
            result.set(true);
        }
        return true;
    }
}