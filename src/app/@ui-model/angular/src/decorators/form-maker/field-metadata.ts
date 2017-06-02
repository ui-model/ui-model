import { AsyncValidator, AsyncValidatorFn, Validator, ValidatorFn } from '@angular/forms';
import { Type } from '@angular/core';
export interface FieldMetadata {
  name?: string;
  type?: Type<any>;
  arrayElementType?: Type<any>;
  dataTypeValidators?: ValidatorFn[];
  validators?: (ValidatorFn | Type<Validator>)[];
  asyncValidators?: (AsyncValidatorFn | Type<AsyncValidator>)[];

  label?: string;
  css?: string;
  editor?: Type<Object>;
  errors?: { [code: string]: string };

  isGroup?: boolean;
  isArray?: boolean;
  isControl?: boolean;
}
