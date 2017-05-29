import { ValidatorFn } from '@angular/forms';
import { FieldMetadata } from '../metas';
export function Custom(validator: ValidatorFn): any {
  return function (target: any, name: string): void {
    const field = FieldMetadata.of(target, name);
    field.addValidator(validator);
  };
}
