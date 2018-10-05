import { AbstractControl, ValidatorFn } from '@angular/forms';

export function equals(value: any): ValidatorFn {
  return (c: AbstractControl) => {
    if (c.value !== value) {
      return { equals: { requiredValue: value, actualValue: c.value } };
    }
  };
}
