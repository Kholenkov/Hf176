import {Pattern} from '../Pattern';

export class No extends Pattern {
    constructor(params = null) {
        super(params);
        this.params().set({
            pattern: '^no|нет$',
            patternFlags: ['i']
        });
    }
}