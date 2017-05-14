import {Rules as RulesClass} from '../Rules';

export let Rules = (Base) => class extends Base {
        constructor() {
            super();
            this.rulesClass = null;
        }

        /**
         * @returns {RulesClass}
         */
        getRulesClass() {
            if (this.rulesClass === null) {
                this.rulesClass = new RulesClass();
            }
            return this.rulesClass;
        }

        /**
         * @returns {RulesClass}
         */
        rules() {
            return this.getRulesClass();
        }

        /**
         * @param {RulesClass} rulesClass
         * @returns {Base}
         */
        setRulesClass(rulesClass) {
            if ((typeof rulesClass !== 'object') || !(rulesClass instanceof RulesClass)) {
                throw new TypeError('Класс должен быть наследником класса Rules');
            }
            this.rulesClass = rulesClass;
            return this;
        }
    };