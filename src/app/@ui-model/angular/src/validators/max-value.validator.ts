import { AbstractControl, ValidatorFn } from '@angular/forms';
export function maxValue(value: number): ValidatorFn {
  return (c: AbstractControl) => {
    if (+c.value > value) {
      return {maxValue: {required: value, actual: +c.value}};
    }
  };
}
