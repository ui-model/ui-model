import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import {
  metaAsyncValidators,
  metaElementType,
  metaElementTypes,
  metaTypes,
  metaValidators,
} from '../decorators/reflect-utils';
import { CanBeNew } from '@ui-model/common';
const Reflect = window['Reflect'];

@Injectable()
export class FormMaker {

  constructor() {
  }

  private _createFrom(data: {}): AbstractControl {
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
        control = this._createFrom(fieldType);
      } else if (isArray) {
        control = new FormArray([]);
        Reflect.defineMetadata(metaElementType, control, fieldElementType);
      } else {
        control = new FormControl();
      }
      control.setValidators(fieldValidators);
      control.setAsyncValidators(fieldAsyncValidators);
      controls[name] = control;
    });

    return new FormGroup(controls);
  }

  createFromModel<T>(model: CanBeNew<T>): FormGroup {
    if (!Reflect.hasMetadata(metaTypes, model)) {
      throw 'The `model` parameter must be a class with the `@FormModel()` decorator!';
    }
    return this._createFrom(model) as FormGroup;
  }
}
