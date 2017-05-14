import {Utils} from './Utils';

export class Params {
    constructor() {
        this.params = {};
    }

    /**
     * @param {Object|String} arg1
     * @param {} arg2
     * @returns {Params}
     */
    add(arg1, arg2 = null) {
        if (typeof arg1 === 'object') {
            if (Utils.isArray(arg1)) {
                throw new TypeError('Параметр arg1 должен быть объектом');
            }
            for (var name in arg1) {
                this.add(name, arg1[name]);
            }
        } else if (typeof arg1 === 'string') {
            this.params[arg1] = arg2;
        } else {
            throw new TypeError('Параметр arg1 должен быть объектом либо строкой');
        }
        return this;
    }

    /**
     * @param {Function} callback
     * @returns {Params}
     */
    forEach(callback) {
        if (typeof callback === 'function') {
            for (var name in this.params) {
                callback.apply(this, [this.params[name], name]);
            }
        } else {
            throw new TypeError('Параметр callback должен быть функцией');
        }
        return this;
    }

    /**
     * @param {Null|String} name
     * @param {} defaultVal
     * @returns {}
     */
    get(name = null, defaultVal = null) {
        if (typeof name === 'string') {
            return (typeof this.params[name] !== 'undefined') ? this.params[name] : defaultVal;
        } else if (name !== null) {
            throw new TypeError('Параметр name должен быть null либо строкой');
        }
        return this.params;
    }

    /**
     * @param {Null|String} name
     * @returns {Boolean}
     */
    has(name = null) {
        if (typeof name === 'string') {
            return (typeof this.params[name] !== 'undefined');
        } else if (name !== null) {
            throw new TypeError('Параметр name должен быть null либо строкой');
        }
        for (var name in this.params) {
            return true;
        }
        return false;
    }

    /**
     * @param {Null|String} name
     * @returns {Params}
     */
    remove(name = null) {
        if (typeof name === 'string') {
            if (typeof this.params[name] !== 'undefined') {
                delete this.params[name];
            }
        } else if (name === null) {
            this.params = {};
        } else {
            throw new TypeError('Параметр name должен быть null либо строкой');
        }
        return this;
    }

    /**
     * @param {Object|String} arg1
     * @param {} arg2
     * @returns {Params}
     */
    set(arg1, arg2 = null) {
        if (typeof arg1 === 'object') {
            this.remove();
        }
        return this.add(arg1, arg2);
    }
}