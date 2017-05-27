import { Directive } from '@angular/core';
import { AbstractControl, FormArray, FormArrayName, FormControl } from '@angular/forms';

// tslint:disable:directive-selector
@Directive({
  selector: '[formArrayName]',
  exportAs: 'uiFormArray',
})
export class FormArrayDirective {

  constructor(private formArrayName: FormArrayName) {
  }

  get array(): FormArray {
    return this.formArrayName && this.formArrayName.control;
  }

  get controls(): AbstractControl[] {
    return this.array && this.array.controls;
  }

  createControl(): void {
    const control = new FormControl();
    this.array.push(control);
  }

  removeControl(control: AbstractControl): void {
    this.array.removeAt(this.array.controls.indexOf(control));
  }

}
