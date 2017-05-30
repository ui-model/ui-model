import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CanBeNew } from '@ui-model/common';
import { FormMetadata, metaKeyField, metaKeyForm } from '../decorators/form-maker';
const Reflect = window['Reflect'];

@Injectable()
export class FormMaker<T> {

  constructor() {
  }

  createFromModel(model: CanBeNew<T>): FormGroup {
    return this._createFromModel(model) as FormGroup;
  }

  private _createFromModel(model: CanBeNew<T>): AbstractControl {
    if (!Reflect.hasMetadata(metaKeyForm, model)) {
      throw Error('The `model` parameter must be a class with the `@FormModel()` decorator!');
    }

    const meta = Reflect.getMetadata(metaKeyForm, model) as FormMetadata;

    const controls: { [name: string]: AbstractControl } = {};

    meta.fields.forEach((field) => {
      let control;
      if (field.isGroup) {
        control = this._createFromModel(field.type);
      } else if (field.isArray) {
        control = new FormArray([]);
      } else {
        control = new FormControl();
      }

      control[metaKeyField] = field;

      const subModel = (Reflect.getMetadata(metaKeyForm, field.type) || {}) as FormMetadata;
      const validators = [].concat(field.validators).concat(subModel.validators);
      control.setValidators(Validators.compose(validators));

      const asyncValidators = [].concat(field.asyncValidators).concat(subModel.asyncValidators);
      control.setAsyncValidators(Validators.compose(asyncValidators));

      controls[field.name] = control;
    });

    const result = new FormGroup(controls);
    result[metaKeyForm] = meta;
    return result;
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
        control.push(new FormControl(item));
      });
    }
  }
}