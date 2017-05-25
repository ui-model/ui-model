import { ValidatorFn } from '@angular/forms';
import { addFieldType, addValidator } from '../reflect-utils';
const Reflect = window['Reflect'];

export function Custom(validator: ValidatorFn): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addValidator(target, name, validator);
  };
}
