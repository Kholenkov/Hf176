import {Pattern} from '../../src/Rule/Pattern';
QUnit.test('Rule/Pattern', function (assert) {
    var rule = new Pattern();
    var tests = [
        [42, true],
        [3.14, false],
        ['Abc', false]
    ];

    for (var i in tests) {
        assert.ok(rule.validate(tests[i][0]) === true);
    }

    rule.params().set('pattern', '^[0-9]+$');
    for (var i in tests) {
        assert.ok(rule.validate(tests[i][0]) === tests[i][1]);
    }
});

import {No} from '../../src/Rule/Pattern/No';
QUnit.test('Rule/Pattern/No', function (assert) {
    var rule = new No();
    var tests = [
        [true, [null, 'no', 'No', 'NO', 'нет', 'Нет', 'НЕТ']],
        [false, [42, 'yes', 'Yes', 'YES', 'да', 'Да', 'ДА']]
    ];
    for (var i in tests) {
        for (var j in tests[i][1]) {
            assert.ok(rule.validate(tests[i][1][j]) === tests[i][0]);
        }
    }
});

import {Yes} from '../../src/Rule/Pattern/Yes';
QUnit.test('Rule/Pattern/Yes', function (assert) {
    var rule = new Yes();
    var tests = [
        [true, [null, 'yes', 'Yes', 'YES', 'да', 'Да', 'ДА']],
        [false, [42, 'no', 'No', 'NO', 'нет', 'Нет', 'НЕТ']]
    ];
    for (var i in tests) {
        for (var j in tests[i][1]) {
            assert.ok(rule.validate(tests[i][1][j]) === tests[i][0]);
        }
    }
});