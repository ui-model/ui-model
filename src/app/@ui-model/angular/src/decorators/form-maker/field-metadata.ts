import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
export interface FieldMetadata {
  name?: string;
  type?: any;
  arrayElementType?: any;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];

  label?: string;
  css?: string;

  isGroup?: boolean;
  isArray?: boolean;
  isControl?: boolean;
}
