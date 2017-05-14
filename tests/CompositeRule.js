import {BoolType} from '../src/Rule/Type/BoolType';
import {NumberType} from '../src/Rule/Type/NumberType';

import {AllOf} from '../src/CompositeRule/AllOf';
QUnit.test('CompositeRule/AllOf', function (assert) {
    var rule = new AllOf([
        new NumberType(),
        new NumberType()
    ]);
    assert.ok(rule.validate(42) === true);
    assert.ok(rule.validate('') === false);
});

import {AnyOf} from '../src/CompositeRule/AnyOf';
QUnit.test('CompositeRule/AnyOf', function (assert) {
    var rule = new AnyOf([
        new BoolType(),
        new NumberType()
    ]);
    assert.ok(rule.validate(42) === true);
    assert.ok(rule.validate(true) === true);
    assert.ok(rule.validate('') === false);
});

import {NoneOf} from '../src/CompositeRule/NoneOf';
QUnit.test('CompositeRule/NoneOf', function (assert) {
    var rule = new NoneOf([
        new BoolType(),
        new NumberType()
    ]);
    assert.ok(rule.validate(42) === false);
    assert.ok(rule.validate(true) === false);
    assert.ok(rule.validate('') === true);
});

import {OneOf} from '../src/CompositeRule/OneOf';
QUnit.test('CompositeRule/OneOf', function (assert) {
    var rule = new OneOf([
        new BoolType(),
        new NumberType()
    ]);
    assert.ok(rule.validate(42) === true);
    assert.ok(rule.validate(true) === true);
    assert.ok(rule.validate('') === false);

    rule.rules().add(new NumberType());
    assert.ok(rule.validate(42) === false);
    assert.ok(rule.validate(true) === true);
    assert.ok(rule.validate('') === false);
});