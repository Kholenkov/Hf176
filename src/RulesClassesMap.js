import {AllOf} from './CompositeRule/AllOf';
import {AnyOf} from './CompositeRule/AnyOf';
import {NoneOf} from './CompositeRule/NoneOf';
import {OneOf} from './CompositeRule/OneOf';

import {AlwaysInvalid} from './Rule/AlwaysInvalid';
import {AlwaysValid} from './Rule/AlwaysValid';
import {Interval} from './Rule/Interval';
import {NotEmpty} from './Rule/NotEmpty';
import {Pattern} from './Rule/Pattern';
import {Type} from './Rule/Type';

import {FloatInterval as Interval_FloatInterval} from './Rule/Interval/FloatInterval';
import {IntInterval as Interval_IntInterval} from './Rule/Interval/IntInterval';
import {Length as Interval_Length} from './Rule/Interval/Length';

import {No as Pattern_No} from './Rule/Pattern/No';
import {Yes as Pattern_Yes} from './Rule/Pattern/Yes';

import {BankAccount as Scheme_BankAccount} from './Rule/Scheme/BankAccount';
import {BankCode as Scheme_BankCode} from './Rule/Scheme/BankCode';
import {CorrespondentAccount as Scheme_CorrespondentAccount} from './Rule/Scheme/CorrespondentAccount';
import {EntrepreneurCode as Scheme_EntrepreneurCode} from './Rule/Scheme/EntrepreneurCode';
import {LegalEntityCode as Scheme_LegalEntityCode} from './Rule/Scheme/LegalEntityCode';
import {SocialInsuranceCode as Scheme_SocialInsuranceCode} from './Rule/Scheme/SocialInsuranceCode';
import {TaxpayerCode as Scheme_TaxpayerCode} from './Rule/Scheme/TaxpayerCode';
import {TaxpayerRegistrationReasonCode as Scheme_TaxpayerRegistrationReasonCode} from './Rule/Scheme/TaxpayerRegistrationReasonCode';

import {BoolType as Type_BoolType} from './Rule/Type/BoolType';
import {InfinityType as Type_InfinityType} from './Rule/Type/InfinityType';
import {NaNType as Type_NaNType} from './Rule/Type/NaNType';
import {NullType as Type_NullType} from './Rule/Type/NullType';
import {NumberType as Type_NumberType} from './Rule/Type/NumberType';
import {ObjectType as Type_ObjectType} from './Rule/Type/ObjectType';
import {StringType as Type_StringType} from './Rule/Type/StringType';
import {UndefinedType as Type_UndefinedType} from './Rule/Type/UndefinedType';

import {FloatVal as Val_FloatVal} from './Rule/Val/FloatVal';
import {IntVal as Val_IntVal} from './Rule/Val/IntVal';

export let RulesClassesMap = {
    'AllOf': AllOf,
    'AnyOf': AnyOf,
    'NoneOf': NoneOf,
    'OneOf': OneOf,
    // ----
    'AlwaysInvalid': AlwaysInvalid,
    'AlwaysValid': AlwaysValid,
    'Interval': Interval,
    'NotEmpty': NotEmpty,
    'Pattern': Pattern,
    'Type': Type,
    // ----
    'Interval.Float': Interval_FloatInterval,
    'Interval.Int': Interval_IntInterval,
    'Length': Interval_Length,
    // ----
    'Pattern.No': Pattern_No,
    'Pattern.Yes': Pattern_Yes,
    // ----
    'Scheme.BankAccount': Scheme_BankAccount,
    'Scheme.BankCode': Scheme_BankCode,
    'Scheme.CorrespondentAccount': Scheme_CorrespondentAccount,
    'Scheme.EntrepreneurCode': Scheme_EntrepreneurCode,
    'Scheme.LegalEntityCode': Scheme_LegalEntityCode,
    'Scheme.SocialInsuranceCode': Scheme_SocialInsuranceCode,
    'Scheme.TaxpayerCode': Scheme_TaxpayerCode,
    'Scheme.TaxpayerRegistrationReasonCode': Scheme_TaxpayerRegistrationReasonCode,
    // ----
    'Type.Bool': Type_BoolType,
    'Type.Infinity': Type_InfinityType,
    'Type.NaN': Type_NaNType,
    'Type.Null': Type_NullType,
    'Type.Number': Type_NumberType,
    'Type.Object': Type_ObjectType,
    'Type.String': Type_StringType,
    'Type.Undefined': Type_UndefinedType,
    // ----
    'Val.Float': Val_IntVal,
    'Val.Int': Val_IntVal,
    'Val.String': Type_StringType,
    // ----
    'Float': Val_FloatVal,
    'Int': Val_IntVal,
    'String': Type_StringType
};