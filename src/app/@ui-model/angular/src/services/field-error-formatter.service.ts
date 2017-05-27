import { Injectable } from '@angular/core';

@Injectable()
export class FieldErrorFormatter {

  format(key: string, value: any): string {
    switch (key) {
      case 'minlength':
        return `The length <span class="text-muted field-error-actual">( ${value.actualLength} )</span> is less than minimum length 
<span class="text-muted field-error-expected">( ${value.requiredLength} )</span>`;
      case 'maxlength':
        return `The length <span class="text-muted field-error-actual">( ${value.actualLength} )</span> exceeds maximum length 
<span class="text-muted field-error-expected">( ${value.requiredLength} )</span>`;
      case 'minValue':
        return `The value <span class="text-muted field-error-actual">( ${value.actualValue} )</span> is less than minimum value 
<span class="text-muted field-error-expected">( ${value.requiredValue} )</span>`;
      case 'maxValue':
        return `The value <span class="text-muted field-error-actual">( ${value.actualValue} )</span> exceeds maximum value 
<span class="text-muted field-error-expected">( ${value.requiredValue} )</span>`;
      case 'pattern':
        return `The value <span class="text-muted field-error-actual">( ${value.actualValue} )</span> does not match the required pattern 
<span class="text-muted field-error-expected">( ${value.requiredPattern} )</span>`;
      case 'required':
        return `The value cannot be blank`;
      case 'requiredTrue':
        return `The value must be true`;
      case 'email':
        return `The value is not a valid e-mail address`;
      case 'url':
        return `The value is not a valid URL`;
      case 'unique':
        return `The value is already exists`;
      case 'sameAs':
        return `The value must be same as <span class="text-muted field-error-expected">( ${value.field} )</span>`;
      default:
        return `( ${key} ) - ( ${JSON.stringify(value)} )`;
    }
  }

}
