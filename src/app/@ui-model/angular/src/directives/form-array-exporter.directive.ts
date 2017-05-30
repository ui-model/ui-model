import { Directive } from '@angular/core';
import { AbstractControl, FormArray, FormArrayName, FormControl } from '@angular/forms';
import { metaKeyField } from '../decorators/form-maker';

// tslint:disable:directive-selector
@Directive({
  selector: '[formArrayName]',
  exportAs: 'uiFormArray',
})
export class FormArrayExporterDirective {

  constructor(private formArrayName: FormArrayName) {
  }

  get control(): FormArray {
    return this.formArrayName && this.formArrayName.control;
  }

  get items(): AbstractControl[] {
    return this.control && this.control.controls;
  }

  createItem(): void {
    const meta = this.control[metaKeyField];
    const itemValue = meta.arrayElementType && meta.arrayElementType();
    const control = new FormControl(itemValue);
    this.control.push(control);
  }

  removeItem(item: AbstractControl): void {
    this.control.removeAt(this.control.controls.indexOf(item));
  }

}
