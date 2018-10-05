import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isInteger(c: AbstractControl): ValidationErrors {
  if (/^\d+$/.test(c.value)) {
    return { number: true };
  }
}
