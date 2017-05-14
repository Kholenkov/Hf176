import {Error} from '../src/Error';
import {Result} from '../src/Result';
import {Rule} from '../src/Rule';
import {Utils} from '../src/Utils';

QUnit.test('Error', function (assert) {
    var error = new Error();

    assert.ok(error.getCode() === null);
    assert.ok(error.getMessage() === null);
    assert.ok(error.getRawMessage() === null);
    assert.ok(error.getReplacements() === null);
    error.setCode('test')
        .setMessage('Code {2}; message: {0}')
        .setReplacements(['Test', 'default', 42]);
    assert.ok(error.getCode() === 'test');
    assert.ok(error.getMessage() === 'Code 42; message: Test');
    assert.ok(error.getRawMessage() === 'Code {2}; message: {0}');
    assert.ok(Utils.isArray(error.getReplacements()));
});

QUnit.test('Errors', function (assert) {
    var result = new Result();

    var error1 = new Error();
    error1.setCode('test1');
    var error2 = new Error();
    error2.setCode('test2');
    var error3 = new Error();
    error3.setCode('test3');

    assert.ok(result.errors().has() === false);
    result.errors().add(error1);
    assert.ok(result.errors().has() === true);
    result.errors().remove();
    assert.ok(result.errors().has() === false);
    assert.ok(result.errors().getFirst() === null);
    assert.ok(result.errors().getLast() === null);

    result.errors().set([error1, error2, error3]);
    assert.ok(result.errors().has() === true);
    assert.ok(result.errors().getFirst().getCode() === 'test1');
    assert.ok(result.errors().getLast().getCode() === 'test3');

    result.errors().forEach(function (error, index) {
        if (index === 1) {
            this.errors.splice(index, 1);
        }
    });
    assert.ok(result.errors().has() === true);
    assert.ok(result.errors().getFirst().getCode() === 'test1');
    assert.ok(result.errors().getLast().getCode() === 'test3');
});

QUnit.test('ErrorsTemplates', function (assert) {
    var rule = new Rule();

    var error1 = new Error();
    error1.setCode('test1');
    var error2 = new Error();
    error2.setCode('test2');
    var error3 = new Error();
    error3.setCode('test3');

    assert.ok(rule.errorsTemplates().has() === false);
    assert.ok(rule.errorsTemplates().has('test1') === false);
    rule.errorsTemplates().add('test1', error1);
    assert.ok(rule.errorsTemplates().has() === true);
    assert.ok(rule.errorsTemplates().has('test1') === true);
    rule.errorsTemplates().remove();
    assert.ok(rule.errorsTemplates().has() === false);
    assert.ok(rule.errorsTemplates().has('test1') === false);

    rule.errorsTemplates().set({
        'test1': error1,
        'test2': error2,
        'test3': error3
    });
    assert.ok(rule.errorsTemplates().has() === true);
    assert.ok(rule.errorsTemplates().has('test1') === true);
    assert.ok(rule.errorsTemplates().has('test2') === true);
    assert.ok(rule.errorsTemplates().has('test3') === true);
    rule.errorsTemplates().forEach(function (error, name) {
        if (name === 'test2') {
            this.remove(name);
        }
    });
    assert.ok(rule.errorsTemplates().has() === true);
    assert.ok(rule.errorsTemplates().has('test1') === true);
    assert.ok(rule.errorsTemplates().has('test2') === false);
    assert.ok(rule.errorsTemplates().has('test3') === true);

    rule.errorsTemplates().remove();
    assert.ok(rule.errorsTemplates().has() === false);
    assert.ok(rule.errorsTemplates().has('test1') === false);
    assert.ok(rule.errorsTemplates().has('test3') === false);
});

QUnit.test('Params', function (assert) {
    var rule = new Rule();

    assert.ok(rule.params().has() === false);
    assert.ok(rule.params().has('min') === false);
    assert.ok(rule.params().get('min') === null);
    rule.params().add('min', 10);
    assert.ok(rule.params().has() === true);
    assert.ok(rule.params().has('min') === true);
    assert.ok(rule.params().get('min') === 10);

    assert.ok(rule.params().has('max') === false);
    assert.ok(rule.params().get('max') === null);
    rule.params().add({
        'min': 25,
        'max': 100
    });
    assert.ok(rule.params().has('min') === true);
    assert.ok(rule.params().has('max') === true);
    assert.ok(rule.params().get('min') === 25);
    assert.ok(rule.params().get('max') === 100);

    var i = 0;
    rule.params().forEach(function (val, name) {
        i++;
        if (name === 'max') {
            this.set('max', 42);
        }
        if (name === 'min') {
            this.remove(name);
        }
    });
    assert.ok(i === 2);
    assert.ok(rule.params().has('min') === false);
    assert.ok(rule.params().has('max') === true);
    assert.ok(rule.params().get('min') === null);
    assert.ok(rule.params().get('max') === 42);

    assert.ok(rule.params().has('flag') === false);
    assert.ok(rule.params().get('flag') === null);
    rule.params().set({'flag': 3.14});
    assert.ok(rule.params().has('flag') === true);
    assert.ok(rule.params().get('flag') === 3.14);
    assert.ok(rule.params().has('max') === false);
    assert.ok(rule.params().get('max') === null);

    assert.ok(rule.params().has() === true);
    rule.params().remove();
    assert.ok(rule.params().has() === false);
    assert.ok(rule.params().has('flag') === false);
    assert.ok(rule.params().get('flag') === null);
});