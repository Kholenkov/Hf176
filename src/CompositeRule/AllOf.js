import {CompositeRule} from '../CompositeRule';

export class AllOf extends CompositeRule {
    constructor(rules = null) {
        super(rules);
        this._addErrorsTemplates({invalid: 'Значение должно соответствовать всем правилам валидации'});
    }

    validate(val, result = null) {
        var rules = this.rules().get();
        for (var i in rules) {
            if (!rules[i].validate(val, result)) {
                if (this._checkResult(result)) {
                    result.set(false);
                    result.errors().add(this.errorsTemplates().get('invalid'));
                }
                return false;
            }
        }
        if (this._checkResult(result)) {
            result.set(true);
        }
        return true;
    }
}