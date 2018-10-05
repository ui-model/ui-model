import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isNumber(c: AbstractControl): ValidationErrors {
  if (isNaN(+c.value)) {
    return { number: true };
  }
}
