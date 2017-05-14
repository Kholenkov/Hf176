import {Rule} from '../Rule';
import {Utils} from '../Utils';

export class NotEmpty extends Rule {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение должно быть непустым'});
    }

    validate(val, result = null) {
        var _result = !this._valIsEmpty(val);
        if (this._checkResult(result)) {
            result.set(_result);
            if (!_result) {
                result.errors().add(this.errorsTemplates().get('invalid'));
            }
        }
        return _result;
    }
}