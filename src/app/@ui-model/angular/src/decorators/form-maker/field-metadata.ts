import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Type } from '@angular/core';
export interface FieldMetadata {
  name?: string;
  type?: Type<any>;
  arrayElementType?: Type<any>;
  autoValidators?: ValidatorFn[];
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];

  label?: string;
  css?: string;
  editor?: Type<any>;
  errors?: { [code: string]: string };

  isGroup?: boolean;
  isArray?: boolean;
  isControl?: boolean;
}
