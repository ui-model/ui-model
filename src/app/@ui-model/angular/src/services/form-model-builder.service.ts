import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
const Reflect = window['Reflect'];

@Injectable()
export class FormModelBuilder {

  constructor() {
  }

  _buildFrom(data: {}): AbstractControl {
    const fields = Reflect.getMetadata('design:fields', data);
    const validators = Reflect.getMetadata('design:validators', data);
    const asyncValidators = Reflect.getMetadata('design:async-validators', data);

    const controls: { [name: string]: AbstractControl } = {};

    Object.keys(fields).forEach((name) => {
      const fieldType = fields[name];
      const fieldValidators = validators[name];
      const fieldAsyncValidators = asyncValidators[name];

      const isSubModel = Reflect.hasMetadata('design:fields', fieldType);
      const control = controls[name] = isSubModel ? this._buildFrom(fieldType) : new FormControl(undefined);
      control.setValidators(fieldValidators);
      control.setAsyncValidators(fieldAsyncValidators);
    });

    return new FormGroup(controls);
  }

  buildFrom(data: {}): FormGroup {
    return this._buildFrom(data.constructor) as FormGroup;
  }
}
