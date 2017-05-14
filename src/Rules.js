import {Rule} from './Rule';
import {Utils} from './Utils';

export class Rules {
    constructor() {
        this.rules = [];
    }

    /**
     * @param {Object} arg
     * Rule
     * [Rule, ...]
     * @returns {Rules}
     */
    add(arg) {
        if ((typeof arg === 'object') && (arg instanceof Rule)) {
            this.rules.push(arg);
        } else if (Utils.isArray(arg)) {
            arg.forEach(function (arg) {
                this.add(arg);
            }, this);
        } else {
            throw new TypeError('Параметр arg должен быть объектом класса Rule либо массивом объектов класса Rule');
        }
        return this;
    }

    /**
     * @param {Function} callback
     * @returns {Rules}
     */
    forEach(callback) {
        if (typeof callback === 'function') {
            this.rules.forEach(callback, this);
        } else {
            throw new TypeError('Параметр callback должен быть функцией');
        }
        return this;
    }

    /**
     * @returns {Array}
     */
    get() {
        return this.rules;
    }

    /**
     * @returns {Boolean}
     */
    has() {
        return this.rules.length ? true : false;
    }

    /**
     * @returns {Rules}
     */
    remove() {
        this.rules = [];
        return this;
    }

    /**
     * @param {Object} arg
     * Rule
     * [Rule, ...]
     * @returns {Rules}
     */
    set(arg) {
        return this.remove()
            .add(arg);
    }
}