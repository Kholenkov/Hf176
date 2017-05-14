import {Error} from './Error';
import {ErrorsTemplates as ErrorsTemplatesMixin} from './Mixin/ErrorsTemplates';
import {Params as ParamsMixin} from './Mixin/Params';
import {Result} from './Result';
import {Utils} from './Utils';

export class Rule extends ParamsMixin(ErrorsTemplatesMixin(class {
})) {
    /**
     * @param {Null|Object} params
     */
    constructor(params = null) {
        super();
        if (params !== null) {
            this.params().set(params);
    }
    }

    sanitize(val, result = null) {
        throw new SyntaxError('Метод отсутствует');
    }

    validate(val, result = null) {
        throw new SyntaxError('Метод отсутствует');
    }

    // -------------------------------------------------------------------------

    _addErrorsTemplates(errorsTemplates) {
        if (typeof errorsTemplates !== 'object') {
            throw new TypeError('Параметр errorsTemplates должен быть объектом');
        }
        for (var name in errorsTemplates) {
            this.errorsTemplates().add(name, (new Error()).setCode(name).setMessage(errorsTemplates[name]));
        }
        return this;
    }

    _checkResult(result) {
        return ((typeof result === 'object') && (result instanceof Result));
    }

    _valIsEmpty(val) {
        return ((val === null) || ((typeof val === 'string') || Utils.isArray(val)) && !val.length);
    }
}