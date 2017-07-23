import { Type } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, Validator, ValidatorFn } from '@angular/forms';

export interface PropertyMetadata {
  name?: string;
  type?: Type<any>;
  arrayElementType?: Type<any>;
  dataTypeValidators?: ValidatorFn[];
  validators?: (ValidatorFn | Type<Validator>)[];
  asyncValidators?: (AsyncValidatorFn | Type<AsyncValidator>)[];
  listeners?: ((c: AbstractControl) => void)[];
  defaultValue?: any;

  label?: string;
  css?: string;
  editor?: Type<Object> | string;
  editorInputs?: { [key: string]: any };
  errors?: { [code: string]: string };

  isGroup?: boolean;
  isArray?: boolean;
  isControl?: boolean;
}
