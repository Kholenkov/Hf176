console.log('Example 1 >>>');

import {Validator} from '../../src/Validator';

var validator = new Validator();
validator.setRules({
    id: ['NotEmpty', 'Int'],
    link: [['Length', {max: 255, min: 5}]],
    'name.brief': ['NotEmpty', 'String', ['Length', {max: 10}]],
    'name.full': ['NotEmpty', 'String', ['Length', {max: 255, min: 10}]]
});

console.log('--- Test 1');
validator.setVals({
    id: 3.14,
    'name.brief': '12345678901',
    'name.full': '12345'
});
console.log(validator.validate());
var results = validator.getResults();
for (var fieldName in results) {
    console.log(fieldName + ': ' + results[fieldName].get());
    results[fieldName].errors().forEach(function (error) {
        console.log(error.getMessage());
    });
}

console.log('--- Test 2');
validator.setVals({
    id: 42,
    link: '/test/',
    'name.brief': 'Кратко',
    'name.full': 'Полное название'
});
console.log(validator.validate());
var results = validator.getResults();
for (var fieldName in results) {
    console.log(fieldName + ': ' + results[fieldName].get());
    results[fieldName].errors().forEach(function (error) {
        console.log(error.getMessage());
    });
}

console.log('<<< Example 1');