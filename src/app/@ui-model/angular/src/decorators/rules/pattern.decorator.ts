import { addFieldType, addValidator } from '../reflect-utils';
import { Validators } from '@angular/forms';
export function Pattern(pattern: string | RegExp): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addValidator(target, name, Validators.pattern(pattern));
  };
}
