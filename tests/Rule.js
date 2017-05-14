import {Rule} from '../src/Rule';
import {RulesClassesMap} from '../src/RulesClassesMap';
QUnit.test('RulesClassesMap', function (assert) {
    for (var ruleClassName in RulesClassesMap) {
        var rule = new RulesClassesMap[ruleClassName]();
        assert.ok(rule instanceof Rule);
    }
});

import {AlwaysInvalid} from '../src/Rule/AlwaysInvalid';
QUnit.test('Rule/AlwaysInvalid', function (assert) {
    var rule = new AlwaysInvalid();
    assert.ok(rule.validate() === false);
});

import {AlwaysValid} from '../src/Rule/AlwaysValid';
QUnit.test('Rule/AlwaysValid', function (assert) {
    var rule = new AlwaysValid();
    assert.ok(rule.validate() === true);
});

import {NotEmpty} from '../src/Rule/NotEmpty';
QUnit.test('Rule/NotEmpty', function (assert) {
    var rule = new NotEmpty();
    var tests = [
        [true, [true, false, 0, 0.0, ' ', [0], {}]],
        [false, [null, '', []]]
    ];
    for (var i in tests) {
        for (var j in tests[i][1]) {
            assert.ok(rule.validate(tests[i][1][j]) === tests[i][0]);
        }
    }
});