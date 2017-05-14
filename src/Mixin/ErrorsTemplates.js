import {ErrorsTemplates as ErrorsTemplatesClass} from '../ErrorsTemplates';

export let ErrorsTemplates = (Base) => class extends Base {
        constructor() {
            super();
            this.errorsTemplatesClass = null;
        }

        /**
         * @returns {ErrorsTemplatesClass}
         */
        errorsTemplates() {
            return this.getErrorsTemplatesClass();
        }

        /**
         * @returns {ErrorsTemplatesClass}
         */
        getErrorsTemplatesClass() {
            if (this.errorsTemplatesClass === null) {
                this.errorsTemplatesClass = new ErrorsTemplatesClass();
            }
            return this.errorsTemplatesClass;
        }

        /**
         * @param {ErrorsTemplatesClass} errorsTemplatesClass
         * @returns {Base}
         */
        setErrorsTemplatesClass(errorsTemplatesClass) {
            if ((typeof errorsTemplatesClass !== 'object') || !(errorsTemplatesClass instanceof ErrorsTemplatesClass)) {
                throw new TypeError('Класс должен быть наследником класса ErrorsTemplates');
            }
            this.errorsTemplatesClass = errorsTemplatesClass;
            return this;
        }
    };