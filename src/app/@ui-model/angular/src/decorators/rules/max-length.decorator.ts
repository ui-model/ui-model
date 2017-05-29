import { Validators } from '@angular/forms';
import { FieldMetadata } from '../reflect-utils';

export function MaxLength(maxLength: number = 0): any {
  return function (target: any, name: string): void {
    const field = FieldMetadata.of(target, name);
    field.addValidator(Validators.maxLength(maxLength));
  };
}
