import {Rule} from './Rule';
import {Rules as RulesMixin} from './Mixin/Rules';

export class CompositeRule extends RulesMixin(Rule) {
    /**
     * @param {Null|Object} rules 
     */
    constructor(rules = null) {
        super();
        if (rules !== null) {
            this.rules().set(rules);
    }
    }
}