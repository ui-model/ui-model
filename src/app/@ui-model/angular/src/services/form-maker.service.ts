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
export class FormMaker<T> {

  constructor() {
  }

  createFromModel(model: CanBeNew<T>): AbstractControl {
    if (!Reflect.hasMetadata(metaTypes, model)) {
      throw 'The `model` parameter must be a class with the `@FormModel()` decorator!';
    }

    const types = Reflect.getMetadata(metaTypes, model);
    const elementTypes = Reflect.getMetadata(metaElementTypes, model);
    const validators = Reflect.getMetadata(metaValidators, model);
    const asyncValidators = Reflect.getMetadata(metaAsyncValidators, model);

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
        control = this.createFromModel(fieldType);
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

  patchValue(control: AbstractControl, value: T): void {
    this._setValue(control, value);
  }

  setValue(control: AbstractControl, value: T): void {
    this._setValue(control, value);
  }

  private _setValue(control: AbstractControl, value: any): void {
    if (control instanceof FormControl) {
      control.setValue(value);
    } else if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach((name) => {
        const c = control.controls[name];
        const v = value && value[name];
        this._setValue(c, v);
      });
    } else if (control instanceof FormArray) {
      // clear
      for (let i = control.length - 1; i >= 0; --i) {
        control.removeAt(i);
      }
      (value || []).forEach((item) => {
        // TODO: create item according to element type(get from reflect metadata)
        control.push(new FormControl(item));
      });
    }
  }

  createFromValue(value: T): FormGroup {
    const form = this.createFromModel(value.constructor as CanBeNew<T>) as FormGroup;
    this.patchValue(form, value);
    return form;
  }
}
