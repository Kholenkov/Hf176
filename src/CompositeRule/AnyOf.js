import {CompositeRule} from '../CompositeRule';

export class AnyOf extends CompositeRule {
    constructor(rules = null) {
        super(rules);
        this._addErrorsTemplates({invalid: 'Значение должно соответствовать хотя бы одному правилу валидации'});
    }

    validate(val, result = null) {
        var rules = this.rules().get();
        for (var i in rules) {
            if (rules[i].validate(val)) {
                if (this._checkResult(result)) {
                    result.set(true);
                }
                return true;
            }
        }
        if (this._checkResult(result)) {
            result.set(false);
            result.errors().add(this.errorsTemplates().get('invalid'));
        }
        return false;
    }
}