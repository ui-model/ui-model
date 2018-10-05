import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minValue(value: number): ValidatorFn {
  return (c: AbstractControl) => {
    if (+c.value < value) {
      return { minValue: { requiredValue: value, actualValue: +c.value } };
    }
  };
}
