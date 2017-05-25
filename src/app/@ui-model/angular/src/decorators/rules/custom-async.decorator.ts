import { AsyncValidatorFn } from '@angular/forms';
import { addAsyncValidator, addFieldType } from '../reflect-utils';

export function CustomAsync(validator: AsyncValidatorFn): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addAsyncValidator(target, name, validator);
  };
}
