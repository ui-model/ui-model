import { Injectable, Injector, Type } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { metaKeyModel, metaKeyProperty, ModelMetadata } from '../decorators/form-maker';

const Reflect = window['Reflect'];

@Injectable()
export class FormMaker {

  constructor(private injector: Injector) {
  }

  createFromModel<T>(model: Type<T>): FormGroup {
    return this._createFromModel(model) as FormGroup;
  }

  private _createFromModel<T>(model: Type<T>): AbstractControl {
    if (!Reflect.hasMetadata(metaKeyModel, model)) {
      throw Error('The `model` parameter must be a class with the `@FormModel()` decorator!');
    }

    const meta = Reflect.getMetadata(metaKeyModel, model) as ModelMetadata;

    const controls: { [name: string]: AbstractControl } = {};

    meta.properties.forEach((property) => {
      let control;
      if (property.isGroup) {
        control = this._createFromModel(property.type);
      } else if (property.isArray) {
        control = new FormArray([]);
      } else {
        control = new FormControl();
      }

      control[metaKeyProperty] = property;

      const injector = this.injector;

      function toValidator(validatorOrServiceClass: Type<Validator>): ValidatorFn {
        const service = injector.get(validatorOrServiceClass, null);
        return service && service.validate.bind(service) || validatorOrServiceClass;
      }

      function toAsyncValidator(validatorOrServiceClass: Type<AsyncValidator>): AsyncValidatorFn {
        const service = injector.get(validatorOrServiceClass, null);
        return service && service.validate.bind(service) || validatorOrServiceClass;
      }

      const subModel = (Reflect.getMetadata(metaKeyModel, property.type) || {}) as ModelMetadata;
      const validators = [].concat(property.dataTypeValidators).concat(property.validators)
        .filter((fn) => !!fn)
        .map(toValidator);
      control.setValidators(Validators.compose(validators));

      const asyncValidators = [].concat(property.asyncValidators)
        .filter((fn) => !!fn)
        .map(toAsyncValidator);
      control.setAsyncValidators(Validators.composeAsync(asyncValidators));
      control.valueChanges.subscribe(() => {
        // delay to the next tick, so that listeners get the latest value
        Promise.resolve().then(() => {
          (property.listeners || []).forEach((listener) => listener(control));
        });
      });

      controls[property.name] = control;
    });

    const result = new FormGroup(controls);
    result[metaKeyModel] = meta;
    return result;
  }

  setValue<T>(control: AbstractControl, value: T): void {
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
