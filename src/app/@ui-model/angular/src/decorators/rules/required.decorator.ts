import { addFieldType, addValidator } from '../reflect-utils';
import { Validators } from '@angular/forms';
export function Required(): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addValidator(target, name, Validators.required);
  };
}
