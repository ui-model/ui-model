import { AbstractControl, AsyncValidator, AsyncValidatorFn, Validator, ValidatorFn } from '@angular/forms';
import { Type } from '@angular/core';
export interface PropertyMetadata {
  name?: string;
  type?: Type<any>;
  arrayElementType?: Type<any>;
  dataTypeValidators?: ValidatorFn[];
  validators?: (ValidatorFn | Type<Validator>)[];
  asyncValidators?: (AsyncValidatorFn | Type<AsyncValidator>)[];
  listeners?: ((c: AbstractControl) => void)[];

  label?: string;
  css?: string;
  editor?: Type<Object> | string;
  errors?: { [code: string]: string };

  isGroup?: boolean;
  isArray?: boolean;
  isControl?: boolean;
}
