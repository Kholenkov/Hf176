import {Error} from './Error';
import {Utils} from './Utils';

export class Errors {
    constructor() {
        this.errors = [];
    }

    /**
     * @param {Object} arg
     * Error
     * [Error, ...]
     * @returns {Errors}
     */
    add(arg) {
        if ((typeof arg === 'object') && (arg instanceof Error)) {
            this.errors.push(arg);
        } else if (Utils.isArray(arg)) {
            arg.forEach(function (arg) {
                this.add(arg);
            }, this);
        } else {
            throw new TypeError('Параметр arg должен быть объектом класса Error либо массивом объектов класса Error');
        }
        return this;
    }

    /**
     * @param {Null|Number|String} code
     * @param {Null|String} message
     * @param {Null|Array} replacements
     * @returns {Error}
     */
    create(code = null, message = null, replacements = null) {
        return (new Error()).setCode(code)
            .setMessage(message)
            .setReplacements(replacements);
    }

    /**
     * @param {Function} callback
     * @returns {Errors}
     */
    forEach(callback) {
        if (typeof callback === 'function') {
            this.errors.forEach(callback, this);
        } else {
            throw new TypeError('Параметр callback должен быть функцией');
        }
        return this;
    }

    /**
     * @returns {Array}
     */
    get() {
        return this.errors;
    }

    /**
     * @returns {Null|Error}
     */
    getFirst() {
        return this.errors.length ? this.errors.slice(0, 1)[0] : null;
    }

    /**
     * @returns {Null|Error}
     */
    getLast() {
        return this.errors.length ? this.errors.slice(-1)[0] : null;
    }

    /**
     * @returns {Boolean}
     */
    has() {
        return this.errors.length ? true : false;
    }

    /**
     * @returns {Errors}
     */
    remove() {
        this.errors = [];
        return this;
    }

    /**
     * @param {Object} arg
     * Error
     * [Error, ...]
     * @returns {Errors}
     */
    set(arg) {
        return this.remove()
            .add(arg);
    }
}