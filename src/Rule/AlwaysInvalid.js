import {Rule} from '../Rule';

export class AlwaysInvalid extends Rule {
    constructor(params = null) {
        super(params);
    }

    validate(val, result = null) {
        return false;
    }
}