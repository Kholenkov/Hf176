import {Params as ParamsClass} from '../Params';

export let Params = (Base) => class extends Base {
        constructor() {
            super();
            this.paramsClass = null;
        }

        /**
         * @returns {ParamsClass}
         */
        getParamsClass() {
            if (this.paramsClass === null) {
                this.paramsClass = new ParamsClass();
            }
            return this.paramsClass;
        }

        /**
         * @returns {ParamsClass}
         */
        params() {
            return this.getParamsClass();
        }

        /**
         * @param {ParamsClass} paramsClass
         * @returns {Base}
         */
        setParamsClass(paramsClass) {
            if ((typeof paramsClass !== 'object') || !(paramsClass instanceof ParamsClass)) {
                throw new TypeError('Класс должен быть наследником класса Params');
            }
            this.paramsClass = paramsClass;
            return this;
        }
    };