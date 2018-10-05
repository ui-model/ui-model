import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isBoolean(c: AbstractControl): ValidationErrors {
  if (c.value !== true && c.value !== false) {
    return { boolean: true };
  }
}
