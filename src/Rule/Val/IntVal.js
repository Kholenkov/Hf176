import {Rule} from '../../Rule';

export class IntVal extends Rule {
    constructor(params = null) {
        super(params);
        this._addErrorsTemplates({invalid: 'Значение должно быть целым числом'});
    }

    validate(val, result = null) {
        var _result = false;
        if (this._valIsEmpty(val)) {
            _result = true;
        } else {
            _result = (((typeof val === 'number') || (typeof val === 'string')) && /^\-?[0-9]+$/.test(val.toString()));
            if (!_result && this._checkResult(result)) {
                result.errors().add(this.errorsTemplates().get('invalid'));
            }
        }
        if (this._checkResult(result)) {
            result.set(_result);
        }
        return _result;
    }
}