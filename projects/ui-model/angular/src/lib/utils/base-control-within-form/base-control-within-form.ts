import { AbstractControl, ControlContainer, FormArray, FormControl, FormGroup } from '@angular/forms';

export class BaseControlWithinForm {
  constructor(private container: ControlContainer) {
  }

  get control(): AbstractControl {
    if (this.container) {
      return this.container.control;
    }
  }

  get formControl(): FormControl {
    if (this.control instanceof FormControl) {
      return this.control as FormControl;
    }
    throw new Error('Must be a FormControl');
  }

  get formGroup(): FormGroup {
    if (this.control instanceof FormGroup) {
      return this.control as FormGroup;
    }
    throw new Error('Must be a FormGroup');
  }

  get formArray(): FormArray {
    if (this.control instanceof FormArray) {
      return this.control as FormArray;
    }
    throw new Error('Must be a FormArray');
  }
}
