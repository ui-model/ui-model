import { FieldMetadata } from '../metas';
import { Validators } from '@angular/forms';
export function Pattern(pattern: string | RegExp): any {
  return function (target: any, name: string): void {
    const field = FieldMetadata.of(target, name);
    field.addValidator(Validators.pattern(pattern));
  };
}
