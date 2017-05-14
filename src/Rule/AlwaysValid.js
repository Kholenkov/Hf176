import {Rule} from '../Rule';

export class AlwaysValid extends Rule {
    constructor(params = null) {
        super(params);
    }

    validate(val, result = null) {
        return true;
    }
}