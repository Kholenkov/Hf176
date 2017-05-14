import {Pattern} from '../Pattern';

export class Yes extends Pattern {
    constructor(params = null) {
        super(params);
        this.params().set({
            pattern: '^yes|да$',
            patternFlags: ['i']
        });
    }
}