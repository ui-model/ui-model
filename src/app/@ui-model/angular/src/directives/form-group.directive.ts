import { Directive } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';

// tslint:disable:directive-selector
@Directive({
  selector: '[formGroupName]',
  exportAs: 'uiFormGroup',
})
export class FormGroupDirective {

  constructor(private formGroupName: FormGroupName) {
  }

  get group(): FormGroup {
    return this.formGroupName && this.formGroupName.control;
  }
}
