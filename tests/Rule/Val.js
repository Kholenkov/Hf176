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
        'float': [
            [4.2, false, 'invalid'],
            [-4.2, false, 'invalid'],
            ['4.2', false, 'invalid'],
            ['-4.2', false, 'invalid'],
            [.2, false, 'invalid'],
            [-.2, false, 'invalid'],
            ['.2', false, 'invalid'],
            ['-.2', false, 'invalid'],
        ],
        'int': [
            [42, false, 'invalid'],
            [-42, false, 'invalid'],
            ['42', false, 'invalid'],
            ['-42', false, 'invalid']
        ]
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

import {FloatVal} from '../../src/Rule/Val/FloatVal';
QUnit.test('Rule/Val/FloatVal', function (assert) {
    var rule = new FloatVal();
    executeTests(assert, rule, getTests(['float', 'int']));
});

import {IntVal} from '../../src/Rule/Val/IntVal';
QUnit.test('Rule/Val/IntVal', function (assert) {
    var rule = new IntVal();
    executeTests(assert, rule, getTests(['int']));
});