import { AbstractControl, ValidationErrors } from '@angular/forms';
// tslint:disable:max-line-length
const urlPattern = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;

export function url(c: AbstractControl): ValidationErrors {
  if (!c.value) {
    return;
  }
  if (!urlPattern.test(c.value)) {
    return { url: true };
  }
}
