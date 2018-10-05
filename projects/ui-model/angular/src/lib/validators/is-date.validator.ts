import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isDate(c: AbstractControl): ValidationErrors {
  if (isNaN(Date.parse(c.value))) {
    return { date: true };
  }
}
