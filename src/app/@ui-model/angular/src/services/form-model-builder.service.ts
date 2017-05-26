import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { metaAsyncValidators, metaElementTypes, metaTypes, metaValidators } from '../decorators/reflect-utils';
const Reflect = window['Reflect'];

@Injectable()
export class FormModelBuilder {

  constructor() {
  }

  _buildFrom(data: {}): AbstractControl {
    const types = Reflect.getMetadata(metaTypes, data);
    const elementTypes = Reflect.getMetadata(metaElementTypes, data);
    const validators = Reflect.getMetadata(metaValidators, data);
    const asyncValidators = Reflect.getMetadata(metaAsyncValidators, data);

    const controls: { [name: string]: AbstractControl } = {};

    Object.keys(types).forEach((name) => {
      const fieldType = types[name];
      const fieldElementType = elementTypes[name];
      const fieldValidators = validators[name];
      const fieldAsyncValidators = asyncValidators[name];

      const isArray = fieldType === Array;
      const isSubModel = Reflect.hasMetadata(metaTypes, fieldType);

      let control;
      if (isSubModel) {
        control = this._buildFrom(fieldType);
      } else if (isArray) {
        control = new FormArray([]);
        if (!control.length) {
          control.push(new FormControl());
        }
        control['metaElementType'] = fieldElementType;
      } else {
        control = new FormControl();
      }
      control.setValidators(fieldValidators);
      control.setAsyncValidators(fieldAsyncValidators);
      controls[name] = control;
    });

    return new FormGroup(controls);
  }

  buildFrom(data: {}): FormGroup {
    return this._buildFrom(data.constructor) as FormGroup;
  }
}
