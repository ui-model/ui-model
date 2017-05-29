import { AsyncValidatorFn } from '@angular/forms';
import { FieldMetadata } from '../reflect-utils';

export function CustomAsync(validator: AsyncValidatorFn): any {
  return function (target: any, name: string): void {
    const field = FieldMetadata.of(target, name);
    field.addAsyncValidator(validator);
  };
}
