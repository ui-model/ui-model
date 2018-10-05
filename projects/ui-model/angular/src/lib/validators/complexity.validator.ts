import { AbstractControl, ValidatorFn } from '@angular/forms';

export function complexity(minCharacterKinds: number): ValidatorFn {
  return (c: AbstractControl) => {
    const value = complexityOf(c.value);
    if (value < minCharacterKinds) {
      return {
        complexity: { requiredValue: minCharacterKinds, actualValue: value },
      };
    }
  };
}

function complexityOf(value: string): number {
  let result = 0;
  if (/[A-Z]/.test(value)) {
    ++result;
  }
  if (/[a-z]/.test(value)) {
    ++result;
  }
  if (/[0-9]/.test(value)) {
    ++result;
  }
  if (/([^\w]|_)/.test(value)) {
    ++result;
  }
  return result;
}
