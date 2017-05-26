import { ValidatorFn } from '@angular/forms';
import { addFieldType, addValidator } from '../reflect-utils';
export function Custom(validator: ValidatorFn): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addValidator(target, name, validator);
  };
}
