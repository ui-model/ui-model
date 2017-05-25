import { Validators } from '@angular/forms';
import { addFieldType, addValidator } from '../reflect-utils';

export function RequiredTrue(): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addValidator(target, name, Validators.requiredTrue);
  };
}
