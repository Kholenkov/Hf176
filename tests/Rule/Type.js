import {Result} from '../../src/Result';

var executeTests = function (assert, rule, tests) {
    for (var i in tests) {
        for (var j in tests[i]) {
            var test = tests[i][j];
            var result = new Result();
            var isValid = rule.validate(test[0], result);
            assert.ok(isValid === test[1], i + '.' + j + '.1) ' + test[0]);
            assert.ok(result.get() === test[1], i + '.' + j + '.2) ' + test[0]);
            if (isValid) {
                assert.ok(result.errors().getFirst() === test[2], i + '.' + j + '.3.1) ' + test[0]);
            } else {
                assert.ok(result.errors().getFirst().getCode() === test[2], i + '.' + j + '.3.2) ' + test[0]);
            }
        }
    }
};

var getTests = function (validType) {
    var tests = {
        'bool': [
            [true, false, 'invalid'],
            [false, false, 'invalid']
        ],
        'infinity': [[1 / 0, false, 'invalid']],
        'nan': [[parseInt(''), false, 'invalid']],
        'null': [[null, false, 'invalid']],
        'number': [
            [1, false, 'invalid'],
            [1.1, false, 'invalid']
        ],
        'object': [[{}, false, 'invalid']],
        'string': [['', false, 'invalid']],
        'undefined': [[undefined, false, 'invalid']]
    };
    var validTypes = (typeof validType === 'string') ? [validType] : validType;
    for (var i in validTypes) {
        if (typeof tests[validTypes[i]] !== 'undefined') {
            for (var j in tests[validTypes[i]]) {
                tests[validTypes[i]][j][1] = true;
                tests[validTypes[i]][j][2] = null;
            }
        }
    }
    return tests;
};

import {BoolType} from '../../src/Rule/Type/BoolType';
QUnit.test('Rule/Type/BoolType', function (assert) {
    var rule = new BoolType();
    executeTests(assert, rule, getTests('bool'));
});

import {InfinityType} from '../../src/Rule/Type/InfinityType';
QUnit.test('Rule/Type/InfinityType', function (assert) {
    var rule = new InfinityType();
    executeTests(assert, rule, getTests('infinity'));
});

import {NaNType} from '../../src/Rule/Type/NaNType';
QUnit.test('Rule/Type/NaNType', function (assert) {
    var rule = new NaNType();
    executeTests(assert, rule, getTests('nan'));
});

import {NullType} from '../../src/Rule/Type/NullType';
QUnit.test('Rule/Type/NullType', function (assert) {
    var rule = new NullType();
    executeTests(assert, rule, getTests('null'));
});

import {NumberType} from '../../src/Rule/Type/NumberType';
QUnit.test('Rule/Type/NumberType', function (assert) {
    var rule = new NumberType();
    executeTests(assert, rule, getTests(['infinity', 'nan', 'number']));
});

import {ObjectType} from '../../src/Rule/Type/ObjectType';
QUnit.test('Rule/Type/ObjectType', function (assert) {
    var rule = new ObjectType();
    executeTests(assert, rule, getTests('object'));
});

import {StringType} from '../../src/Rule/Type/StringType';
QUnit.test('Rule/Type/StringType', function (assert) {
    var rule = new StringType();
    executeTests(assert, rule, getTests('string'));
});

import {UndefinedType} from '../../src/Rule/Type/UndefinedType';
QUnit.test('Rule/Type/UndefinedType', function (assert) {
    var rule = new UndefinedType();
    executeTests(assert, rule, getTests('undefined'));
});