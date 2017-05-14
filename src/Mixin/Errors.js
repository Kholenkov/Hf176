import {Errors as ErrorsClass} from '../Errors';

export let Errors = (Base) => class extends Base {
        constructor() {
            super();
            this.errorsClass = null;
        }

        /**
         * @returns {ErrorsClass}
         */
        errors() {
            return this.getErrorsClass();
        }

        /**
         * @returns {ErrorsClass}
         */
        getErrorsClass() {
            if (this.errorsClass === null) {
                this.errorsClass = new ErrorsClass();
            }
            return this.errorsClass;
        }

        /**
         * @param {ErrorsClass} errorsClass
         * @returns {Base}
         */
        setErrorsClass(errorsClass) {
            if ((typeof errorsClass !== 'object') || !(errorsClass instanceof ErrorsClass)) {
                throw new TypeError('Класс должен быть наследником класса Errors');
            }
            this.errorsClass = errorsClass;
            return this;
        }
    };