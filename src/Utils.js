export class Utils {
    /**
     * @param {} arg
     * @returns {Boolean}
     */
    static isArray(arg) {
        return (Object.prototype.toString.call(arg) === '[object Array]');
    }
}