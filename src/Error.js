import {Utils} from './Utils';

export class Error {
    constructor() {
        this.code = null;
        this.message = null;
        this.replacements = null;
    }

    /**
     * @param {Null|String} message
     * @param {Null|Array} replacements
     * @returns {Null|String}
     */
    formatMessage(message, replacements) {
        if (message !== null) {
            if (typeof message !== 'string') {
                throw new TypeError('Параметр message должен быть строкой');
            } else if (replacements !== null) {
                if (!Utils.isArray(replacements)) {
                    throw new TypeError('Параметр replacements должен быть массивом');
                }
                replacements.forEach(function (replacement, index) {
                    message = message.replace(new RegExp('\\{' + index + '\\}', 'g'), replacement);
                });
            }
        }
        return message;
    }

    /**
     * @returns {Null|Number|String}
     */
    getCode() {
        return this.code;
    }

    /**
     * @returns {Null|String}
     */
    getMessage() {
        return this.formatMessage(this.getRawMessage(), this.getReplacements());
    }

    /**
     * @returns {Null|String}
     */
    getRawMessage() {
        return this.message;
    }

    /**
     * @returns {Array|Null}
     */
    getReplacements() {
        return this.replacements;
    }

    /**
     * @param {Null|Number|String} code
     * @returns {Error}
     */
    setCode(code) {
        if ((code !== null) && (typeof code !== 'number') && (typeof code !== 'string')) {
            throw new TypeError('Параметр code должен быть null, числом либо строкой');
        }
        this.code = code;
        return this;
    }

    /**
     * @param {Null|String} message
     * @returns {Error}
     */
    setMessage(message) {
        if ((message !== null) && (typeof message !== 'string')) {
            throw new TypeError('Параметр message должен быть null либо строкой');
        }
        this.message = message;
        return this;
    }

    /**
     * @param {Null|Array} replacements
     * @returns {Error}
     */
    setReplacements(replacements) {
        if ((replacements !== null) && !Utils.isArray(replacements)) {
            throw new TypeError('Параметр replacements должен быть null либо массивом');
        }
        this.replacements = replacements;
        return this;
    }
}