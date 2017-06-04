# Валидация данных (Hf176)

## Правила валидации

- **CompositeRule**
  - **AllOf**
  - **AnyOf**
  - **NoneOf**
  - **OneOf**
- **Rule**
  - **AlwaysInvalid**
  - **AlwaysValid**
  - ~~CharacterEncoding~~
  - ~~Contains~~
  - ~~EndsWith~~
  - ~~Equals~~
  - **Interval**
    - ~~DateTimeInterval~~
    - ~~DateInterval~~
    - **FloatInterval**
    - **IntInterval**
    - **Length**
    - ~~TimeInterval~~
  - ~~JSON~~
  - **NotEmpty**
  - ~~Number~~
    - ~~Finite~~
    - ~~Infinite~~
    - ~~Int~~
      - ~~Even~~
      - ~~Fibonacci~~
      - ~~Odd~~
      - ~~PerfectSquare~~
      - ~~Prime~~
    - ~~Multiple~~
    - ~~Negative~~
    - ~~Positive~~
    - ~~Zero~~
  - ~~Object~~
    - ~~InstanceOf~~
  - **Pattern**
    - ~~Case~~
      - ~~Lower~~
      - ~~Upper~~
    - ~~Email~~
    - **No**
    - ~~NoWhitespace~~
    - ~~RomanNumerals~~
    - ~~Url~~
      - ~~Video~~
        - ~~YouTube~~
    - ~~Version~~
    - ~~Word~~
      - ~~Consonant~~
      - ~~Vowel~~
    - **Yes**
  - *Scheme*
    - **BankAccount** [Расчетный счет]
    - **BankCode** [БИК]
    - ~~CardNumber (PaymentCardNumber)~~
    - **CorrespondentAccount** [Корреспондентский счет]
    - ~~CountryCode~~ [ISO 3166-1]
    - ~~CountrySubdivisionCode~~ [ISO 3166-2]
    - ~~CurrencyCode~~ [ISO 4217]
    - **EntrepreneurCode** (BusinessmanCode) [ОГРНИП]
    - ~~IMEI~~
    - ~~IPAddress~~
    - ~~ISBN~~
    - ~~ISSN~~
    - ~~LanguageCode~~ [ISO 639]
    - **LegalEntityCode** (ОГРН)
    - ~~MACAddress~~
    - ~~PhoneCode~~ (CountryCallingCode)
    - ~~PhoneNumber~~ (TelephoneNumberingPlan)
    - ~~PostalCode~~
    - **SocialInsuranceCode** (СНИЛС)
    - **TaxpayerCode** (ИНН)
    - **TaxpayerRegistrationReasonCode** (КПП)
    - ~~TLD~~ (TopLevelDomain)
    - ~~VIN~~
  - ~~StartsWith~~
  - **Type**
    - ~~ArrayType~~
    - **BoolType**
    - **InfinityType**
    - **NaNType**
    - **NullType**
    - **NumberType**
    - **ObjectType**
    - **StringType**
    - **UndefinedType**
  - *Val*
    - **FloatVal**
    - **IntVal**
    - ~~StringVal~~

## Пример

```javascript
var validator = new Validator();
validator.setRules({
    id: ['NotEmpty', 'Int'],
    link: [['Length', {max: 255, min: 5}]],
    'name.brief': ['NotEmpty', 'String', ['Length', {max: 10}]],
    'name.full': ['NotEmpty', 'String', ['Length', {max: 255, min: 10}]]
});

validator.setVals({
    id: 3.14,
    'name.brief': '12345678901',
    'name.full': '12345'
});
console.log(validator.validate());
// false
var results = validator.getResults();
for (var fieldName in results) {
    console.log(fieldName + ': ' + results[fieldName].get());
    results[fieldName].errors().forEach(function (error) {
        console.log(error.getMessage());
    });
}
// id: false
// Значение должно быть целым числом
// Значение должно соответствовать всем правилам валидации
// link: true
// name.brief: false
// Длина должна быть меньше либо равна 10
// Значение должно соответствовать всем правилам валидации
// name.full: false
// Длина должна быть больше либо равна 10
// Значение должно соответствовать всем правилам валидации

validator.setVals({
    id: 42,
    link: '/test/',
    'name.brief': 'Кратко',
    'name.full': 'Полное название'
});
console.log(validator.validate());
// true
var results = validator.getResults();
for (var fieldName in results) {
    console.log(fieldName + ': ' + results[fieldName].get());
    results[fieldName].errors().forEach(function (error) {
        console.log(error.getMessage());
    });
}
// id: true
// link: true
// name.brief: true
// name.full: true
```