import {CompositeRule} from '../CompositeRule';

export class OneOf extends CompositeRule {
    constructor(rules = null) {
        super(rules);
        this._addErrorsTemplates({invalid: 'Значение должно соответствовать только одному из правил валидации'});
    }

    validate(val, result = null) {
        var validRules = 0;
        var rules = this.rules().get();
        for (var i in rules) {
            if (rules[i].validate(val, result)) {
                validRules++;
            }
        }
        var _result = (validRules === 1);
        if (this._checkResult(result)) {
            result.set(_result);
            if (!_result) {
                result.errors().add(this.errorsTemplates().get('invalid'));
            }
        }
        return _result;
    }
}