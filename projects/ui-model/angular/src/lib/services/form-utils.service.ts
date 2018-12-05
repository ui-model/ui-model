import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormUtils {

  constructor() {
  }

  markChildrenAsDirty(control: AbstractControl): void {
    this.traverseTree(control, (c) => c.markAsDirty({ onlySelf: true }));
  }

  markChildrenAsPristine(control: AbstractControl): void {
    this.traverseTree(control, (c) => c.markAsPristine({ onlySelf: true }));
  }

  markChildrenAsTouched(control: AbstractControl): void {
    this.traverseTree(control, (c) => c.markAsTouched({ onlySelf: true }));
  }

  markChildrenAsUntouched(control: AbstractControl): void {
    this.traverseTree(control, (c) => c.markAsUntouched({ onlySelf: true }));
  }

  markChildrenAsPending(control: AbstractControl): void {
    this.traverseTree(control, (c) => c.markAsPending({ onlySelf: true }));
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
    Promise.resolve().then(() => {
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
    });
  }

}
