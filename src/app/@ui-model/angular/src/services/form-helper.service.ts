import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Injectable()
export class FormHelper {

  constructor() {
  }

  traverseTree(control: AbstractControl, visitFn: (c: AbstractControl) => void = () => 0): void {
    visitFn(control);
    if (control instanceof FormGroup || control instanceof FormArray) {
      Object.keys(control.controls).forEach((key) => {
        const subControl = control.controls[key];
        this.traverseTree(subControl, visitFn);
      });
    }
  }

  scrollFirstFieldErrorIntoView(root: NodeSelector = document, selector: string = 'ui-field-error>div'): void {
    setTimeout(() => {
      const firstFieldErrorContent = root.querySelector(selector);
      if (!firstFieldErrorContent) {
        return;
      }
      const fieldError = firstFieldErrorContent.parentElement;
      if (!fieldError) {
        return;
      }
      const field = fieldError.parentElement;
      if (!field) {
        return;
      }
      field.scrollIntoView();
    }, 100);
  }

}
