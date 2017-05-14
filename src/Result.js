import {Errors as ErrorsMixin} from './Mixin/Errors';

export class Result extends ErrorsMixin(class {
}) {
    constructor() {
        super();
        this.result = null;
    }

    /**
     * @returns {Boolean|Null}
     */
    get() {
        return this.result;
    }

    /**
     * @returns {Result}
     */
    reset() {
        this.result = null;
        this.errors().remove();
        return this;
    }

    /**
     * @param {Null|Boolean} result
     * @returns {Result}
     */
    set(result) {
        if ((result !== null) && (typeof result !== 'boolean')) {
            throw new TypeError('Параметр result должен быть null либо логическим (boolean)');
        }
        this.result = result;
        return this;
    }
}