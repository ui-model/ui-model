import { AbstractControl, ValidatorFn } from '@angular/forms';

export function complexity(minCharacterKinds: number): ValidatorFn {
  return (c: AbstractControl) => {
    const complexity = complexityOf(c.value);
    if (complexity < minCharacterKinds) {
      return {
        complexity: {requiredValue: minCharacterKinds, actualValue: complexity},
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
