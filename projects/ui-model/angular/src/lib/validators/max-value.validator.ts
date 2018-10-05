import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxValue(value: number): ValidatorFn {
  return (c: AbstractControl) => {
    if (+c.value > value) {
      return { maxValue: { requiredValue: value, actualValue: +c.value } };
    }
  };
}
