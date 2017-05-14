import {Result} from '../../src/Result';

var executeTests1 = function (assert, rule, tests) {
    for (var i in tests) {
        var test = tests[i];
        var result = new Result();
        var isValid = rule.validate(test[0], result);
        assert.ok(isValid === test[1], i + '.1) ' + test[0]);
        assert.ok(result.get() === test[1], i + '.2) ' + test[0]);
        if (isValid) {
            assert.ok(result.errors().getFirst() === test[2], i + '.3.1) ' + test[0]);
        } else {
            assert.ok(result.errors().getFirst().getCode() === test[2], i + '.3.2) ' + test[0]);
        }
    }
};

var executeTests2 = function (assert, rule, tests) {
    for (var i in tests) {
        var test = tests[i];
        var result = new Result();
        if (test.length === 4) {
            rule.params().set('bankCode', test[1]);
            var isValid = rule.validate(test[0], result);
            assert.ok(isValid === test[2], i + '.1) ' + test[0]);
            assert.ok(result.get() === test[2], i + '.2) ' + test[0]);
            if (isValid) {
                assert.ok(result.errors().getFirst() === test[3], i + '.3.1) ' + test[0]);
            } else {
                assert.ok(result.errors().getFirst().getCode() === test[3], i + '.3.2) ' + test[0]);
            }
        } else {
            rule.params().set('bankCode', '000000000');
            var isValid = rule.validate(test[0], result);
            assert.ok(isValid === test[1], i + '.1) ' + test[0]);
            assert.ok(result.get() === test[1], i + '.2) ' + test[0]);
            if (isValid) {
                assert.ok(result.errors().getFirst() === test[2], i + '.3.1) ' + test[0]);
            } else {
                assert.ok(result.errors().getFirst().getCode() === test[2], i + '.3.2) ' + test[0]);
            }
        }
    }
};

var getTests = function (invalidType = 'invalidType', invalidFormat = 'invalidFormat') {
    return [
        [{}, false, invalidType],
        // ----
        [null, true, null],
        ['', true, null],
        [[], true, null],
        // ----
        [0, false, invalidFormat],
        [0., false, invalidFormat],
        [0.0, false, invalidFormat],
        [.0, false, invalidFormat],
        ['0', false, invalidFormat],
        ['0.', false, invalidFormat],
        ['0.0', false, invalidFormat],
        ['.0', false, invalidFormat],
        [1, false, invalidFormat],
        [1., false, invalidFormat],
        [1.0, false, invalidFormat],
        [.1, false, invalidFormat],
        ['1', false, invalidFormat],
        ['1.', false, invalidFormat],
        ['1.1', false, invalidFormat],
        ['.1', false, invalidFormat],
        // ----
        [' ', false, invalidFormat],
        ['-42', false, invalidFormat],
        ['b42', false, invalidFormat],
        ['б42', false, invalidFormat]
    ];
};

import {BankAccount} from '../../src/Rule/Scheme/BankAccount';
QUnit.test('Rule/Scheme/BankAccount', function (assert) {
    var rule = new BankAccount();
    executeTests2(assert, rule, [].concat(getTests(), [
        ['0000000000000000000', '000000000', false, 'invalidFormat'],
        ['0123456789012345678', '000000000', false, 'invalidFormat'],
        ['1234567890123456789', '000000000', false, 'invalidFormat'],
        ['00000000000000000000', '000000000', true, null],
        ['01234567890123456789', '000000000', false, 'invalidCheckNumber'],
        ['12345678901234567890', '000000000', false, 'invalidCheckNumber'],
        ['000000000000000000000', '000000000', false, 'invalidFormat'],
        ['012345678901234567890', '000000000', false, 'invalidFormat'],
        ['123456789012345678901', '000000000', false, 'invalidFormat'],
        // ----
        ['40702810900000002851', '044030827', true, null],
        ['50702810900000002851', '044030827', false, 'invalidCheckNumber'],
        ['40802810900000002851', '044030827', false, 'invalidCheckNumber'],
        ['40703810900000002851', '044030827', false, 'invalidCheckNumber'],
        ['40702820900000002851', '044030827', false, 'invalidCheckNumber'],
        ['40702810000000002851', '044030827', false, 'invalidCheckNumber'],
        ['40702810901000002851', '044030827', false, 'invalidCheckNumber'],
        ['40702810900010002851', '044030827', false, 'invalidCheckNumber'],
        ['40702810900000102851', '044030827', false, 'invalidCheckNumber'],
        ['40702810900000003851', '044030827', false, 'invalidCheckNumber'],
        ['40702810900000002861', '044030827', false, 'invalidCheckNumber']
    ]));
});

import {BankCode} from '../../src/Rule/Scheme/BankCode';
QUnit.test('Rule/Scheme/BankCode', function (assert) {
    var rule = new BankCode();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['01234567', false, 'invalidFormat'],
        ['12345678', false, 'invalidFormat'],
        ['000000000', true, null],
        ['012345678', true, null],
        ['123456789', true, null],
        ['0123456789', false, 'invalidFormat'],
        ['1234567890', false, 'invalidFormat']
    ]));
});

import {CorrespondentAccount} from '../../src/Rule/Scheme/CorrespondentAccount';
QUnit.test('Rule/Scheme/CorrespondentAccount', function (assert) {
    var rule = new CorrespondentAccount();
    executeTests2(assert, rule, [].concat(getTests(), [
        ['0000000000000000000', '000000000', false, 'invalidFormat'],
        ['0123456789012345678', '000000000', false, 'invalidFormat'],
        ['1234567890123456789', '000000000', false, 'invalidFormat'],
        ['00000000000000000000', '000000000', true, null],
        ['01234567890123456789', '000000000', false, 'invalidCheckNumber'],
        ['12345678901234567890', '000000000', false, 'invalidCheckNumber'],
        ['000000000000000000000', '000000000', false, 'invalidFormat'],
        ['012345678901234567890', '000000000', false, 'invalidFormat'],
        ['123456789012345678901', '000000000', false, 'invalidFormat'],
        // ----
        ['30101810200000000827', '044030827', true, null],
        ['40101810200000000827', '044030827', false, 'invalidCheckNumber'],
        ['30201810200000000827', '044030827', false, 'invalidCheckNumber'],
        ['30102810200000000827', '044030827', false, 'invalidCheckNumber'],
        ['30101820200000000827', '044030827', false, 'invalidCheckNumber'],
        ['30101810400000000827', '044030827', false, 'invalidCheckNumber'],
        ['30101810201000000827', '044030827', false, 'invalidCheckNumber'],
        ['30101810200010000827', '044030827', false, 'invalidCheckNumber'],
        ['30101810200000100827', '044030827', false, 'invalidCheckNumber'],
        ['30101810200000001827', '044030827', false, 'invalidCheckNumber'],
        ['30101810200000000837', '044030827', false, 'invalidCheckNumber']
    ]));
});

import {EntrepreneurCode} from '../../src/Rule/Scheme/EntrepreneurCode';
QUnit.test('Rule/Scheme/EntrepreneurCode', function (assert) {
    var rule = new EntrepreneurCode();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['00000000000000', false, 'invalidFormat'],
        ['01234567890123', false, 'invalidFormat'],
        ['12345678901234', false, 'invalidFormat'],
        ['000000000000000', true, null],
        ['012345678901234', false, 'invalidCheckNumber'],
        ['123456789012345', false, 'invalidCheckNumber'],
        ['0000000000000000', false, 'invalidFormat'],
        ['0123456789012345', false, 'invalidFormat'],
        ['1234567890123456', false, 'invalidFormat'],
        // ----
        ['307760324100018', true, null],
        ['407760324100018', false, 'invalidCheckNumber'],
        ['308760324100018', false, 'invalidCheckNumber'],
        ['307770324100018', false, 'invalidCheckNumber'],
        ['307760424100018', false, 'invalidCheckNumber'],
        ['307760325100018', false, 'invalidCheckNumber'],
        ['307760324110018', false, 'invalidCheckNumber'],
        ['307760324100118', false, 'invalidCheckNumber'],
        ['307760324100019', false, 'invalidCheckNumber']
    ]));
});

import {LegalEntityCode} from '../../src/Rule/Scheme/LegalEntityCode';
QUnit.test('Rule/Scheme/LegalEntityCode', function (assert) {
    var rule = new LegalEntityCode();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['000000000000', false, 'invalidFormat'],
        ['012345678901', false, 'invalidFormat'],
        ['123456789012', false, 'invalidFormat'],
        ['0000000000000', true, null],
        ['0123456789012', false, 'invalidCheckNumber'],
        ['1234567890123', false, 'invalidCheckNumber'],
        ['00000000000000', false, 'invalidFormat'],
        ['01234567890123', false, 'invalidFormat'],
        ['12345678901234', false, 'invalidFormat'],
        // ----
        ['1027812400868', true, null],
        ['2027812400868', false, 'invalidCheckNumber'],
        ['1037812400868', false, 'invalidCheckNumber'],
        ['1027912400868', false, 'invalidCheckNumber'],
        ['1027813400868', false, 'invalidCheckNumber'],
        ['1027812410868', false, 'invalidCheckNumber'],
        ['1027812400968', false, 'invalidCheckNumber'],
        ['1027812400869', false, 'invalidCheckNumber']
    ]));
});

import {SocialInsuranceCode} from '../../src/Rule/Scheme/SocialInsuranceCode';
QUnit.test('Rule/Scheme/SocialInsuranceCode', function (assert) {
    var rule = new SocialInsuranceCode();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['0000000000', false, 'invalidFormat'],
        ['0123456789', false, 'invalidFormat'],
        ['1234567890', false, 'invalidFormat'],
        ['00000000000', true, null],
        ['01234567890', false, 'invalidCheckNumber'],
        ['12345678901', false, 'invalidCheckNumber'],
        ['000000000000', false, 'invalidFormat'],
        ['012345678901', false, 'invalidFormat'],
        ['123456789012', false, 'invalidFormat'],
        // ----
        ['08765430300', true, null],
        ['18765430300', false, 'invalidCheckNumber'],
        ['08865430300', false, 'invalidCheckNumber'],
        ['08766430300', false, 'invalidCheckNumber'],
        ['08765440300', false, 'invalidCheckNumber'],
        ['08765430400', false, 'invalidCheckNumber'],
        ['08765430301', false, 'invalidCheckNumber']
    ]));
});

import {TaxpayerCode} from '../../src/Rule/Scheme/TaxpayerCode';
QUnit.test('Rule/Scheme/TaxpayerCode', function (assert) {
    var rule = new TaxpayerCode();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['000000000', false, 'invalidFormat'],
        ['012345678', false, 'invalidFormat'],
        ['123456789', false, 'invalidFormat'],
        ['0000000000', true, null],
        ['0123456789', false, 'invalidCheckNumber'],
        ['1234567890', false, 'invalidCheckNumber'],
        ['00000000000', false, 'invalidFormat'],
        ['01234567890', false, 'invalidFormat'],
        ['12345678901', false, 'invalidFormat'],
        ['000000000000', true, null],
        ['012345678901', false, 'invalidCheckNumber'],
        ['123456789012', false, 'invalidCheckNumber'],
        ['0000000000000', false, 'invalidFormat'],
        ['0123456789012', false, 'invalidFormat'],
        ['1234567890123', false, 'invalidFormat'],
        // ----
        ['7827004526', true, null],
        ['8827004526', false, 'invalidCheckNumber'],
        ['7837004526', false, 'invalidCheckNumber'],
        ['7827104526', false, 'invalidCheckNumber'],
        ['7827005526', false, 'invalidCheckNumber'],
        ['7827004536', false, 'invalidCheckNumber'],
        // ----
        ['760307073214', true, null],
        ['860307073214', false, 'invalidCheckNumber'],
        ['761307073214', false, 'invalidCheckNumber'],
        ['760317073214', false, 'invalidCheckNumber'],
        ['760307173214', false, 'invalidCheckNumber'],
        ['760307074214', false, 'invalidCheckNumber'],
        ['760307073224', false, 'invalidCheckNumber']
    ]));
});

import {TaxpayerRegistrationReasonCode} from '../../src/Rule/Scheme/TaxpayerRegistrationReasonCode';
QUnit.test('Rule/Scheme/TaxpayerRegistrationReasonCode', function (assert) {
    var rule = new TaxpayerRegistrationReasonCode();
    executeTests1(assert, rule, [].concat(getTests(), [
        ['01234567', false, 'invalidFormat'],
        ['12345678', false, 'invalidFormat'],
        ['000000000', true, null],
        ['012345678', true, null],
        ['123456789', true, null],
        ['0123456789', false, 'invalidFormat'],
        ['1234567890', false, 'invalidFormat'],
        // ----
        ['0000AZ000', true, null],
        ['0000aZ000', false, 'invalidFormat'],
        ['0000A-000', false, 'invalidFormat']
    ]));
});