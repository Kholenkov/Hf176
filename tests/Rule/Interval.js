var executeTests = function (assert, rule, tests, result) {
    for (var i in tests) {
        assert.ok(rule.validate(tests[i]) === result);
    }
};

import {FloatInterval} from '../../src/Rule/Interval/FloatInterval';
QUnit.test('Rule/Interval/FloatInterval', function (assert) {
    var rule = new FloatInterval();

    executeTests(assert, rule, [4.2, -4.2, .42, -.42, '4.2', '-4.2', '.42', '-.42', 42, -42, '42', '-42'], true);
    executeTests(assert, rule, ['Abc', {}], false);

    rule.params().set('min', 10.5);
    executeTests(assert, rule, [10.4], false);
    executeTests(assert, rule, [10.5, 10.6], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [10.4, 10.5], false);
    executeTests(assert, rule, [10.6], true);

    rule.params().set('max', 20.5);
    executeTests(assert, rule, [20.4, 20.5], true);
    executeTests(assert, rule, [20.6], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [20.4], true);
    executeTests(assert, rule, [20.5, 20.6], false);

    rule.params().set({
        min: -20.5,
        minInclusive: true
    });
    executeTests(assert, rule, [-20.6], false);
    executeTests(assert, rule, [-20.5, -20.4], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [-20.6, -20.5], false);
    executeTests(assert, rule, [-20.4], true);

    rule.params().set({
        max: -10.5,
        maxInclusive: true
    });
    executeTests(assert, rule, [-10.6, -10.5], true);
    executeTests(assert, rule, [-10.4], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [-10.6], true);
    executeTests(assert, rule, [-10.5, -10.4], false);
});

import {IntInterval} from '../../src/Rule/Interval/IntInterval';
QUnit.test('Rule/Interval/IntInterval', function (assert) {
    var rule = new IntInterval();

    executeTests(assert, rule, [42, -42, '42', '-42'], true);
    executeTests(assert, rule, [4.2, 'Abc', {}], false);

    rule.params().set('min', 10);
    executeTests(assert, rule, [9], false);
    executeTests(assert, rule, [10, 11], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [9, 10], false);
    executeTests(assert, rule, [11], true);

    rule.params().set('max', 20);
    executeTests(assert, rule, [19, 20], true);
    executeTests(assert, rule, [21], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [19], true);
    executeTests(assert, rule, [20, 21], false);

    rule.params().set({
        min: -20,
        minInclusive: true
    });
    executeTests(assert, rule, [-21], false);
    executeTests(assert, rule, [-20, -19], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [-21, -20], false);
    executeTests(assert, rule, [-19], true);

    rule.params().set({
        max: -10,
        maxInclusive: true
    });
    executeTests(assert, rule, [-11, -10], true);
    executeTests(assert, rule, [-9], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [-11], true);
    executeTests(assert, rule, [-10, -9], false);
});

import {Length} from '../../src/Rule/Interval/Length';
QUnit.test('Rule/Interval/Length', function (assert) {
    var rule = new Length();

    executeTests(assert, rule, [42, -42, '42', '-42', 4.2, -4.2, '4.2', '-4.2', [], [42, '-4.2']], true);
    executeTests(assert, rule, [{}], false);

    rule.params().set('min', 2);
    executeTests(assert, rule, [1, '', 'А', [], [42]], false);
    executeTests(assert, rule, [42, 314, 'Аб', 'АбВ', [42, '-4.2'], [42, '-4.2', '']], true);

    rule.params().set('minInclusive', false);
    executeTests(assert, rule, [1, 42, '', 'А', 'Аб', [], [42], [42, '-4.2']], false);
    executeTests(assert, rule, [314, 'АбВ', [42, '-4.2', '']], true);

    rule.params().remove('min');
    rule.params().remove('minInclusive');
    rule.params().set('max', 2);
    executeTests(assert, rule, [1, 42, '', 'А', 'Аб', [], [42], [42, '-4.2']], true);
    executeTests(assert, rule, [314, 'АбВ', [42, '-4.2', '']], false);

    rule.params().set('maxInclusive', false);
    executeTests(assert, rule, [1, '', 'А', [], [42]], true);
    executeTests(assert, rule, [42, 314, 'Аб', 'АбВ', [42, '-4.2'], [42, '-4.2', '']], false);
});