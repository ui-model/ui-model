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
import { ModelMetadata } from '../decorators/form-maker';
import { metaKeyModel, metaKeyProperty } from '../utils/constants';
import { FormHooks } from '../utils/polyfills';

@Injectable({ providedIn: 'root' })
export class FormMaker {

  constructor(private injector: Injector) {
  }

  createFromModel<T>(model: Type<T>): FormGroup {
    const meta = this.buildMetadata(model);
    return this.createFromMetadata(meta);
  }

  buildMetadata<T>(model: Type<T>): ModelMetadata {
    if (!Reflect.hasMetadata(metaKeyModel, model)) {
      throw Error('The `model` parameter must be a class with the `@Model()` decorator!');
    }

    const meta = Reflect.getMetadata(metaKeyModel, model) as ModelMetadata;
    meta.properties
      .filter(property => property.isGroup && !property.groupModel)
      .forEach((property) => {
        property.groupModel = this.buildMetadata(property.type);
      });
    return meta;
  }

  createFromMetadata(meta: ModelMetadata, inheritedUpdateOn?: FormHooks): FormGroup {
    const controls: { [name: string]: AbstractControl } = {};

    const modelUpdateOn = meta.updateOn || inheritedUpdateOn;
    meta.properties.forEach((property) => {
      let control;
      if (property.isGroup) {
        control = this.createFromMetadata(property.groupModel, modelUpdateOn);
      } else if (property.isArray) {
        control = new FormArray([]);
      } else {
        control = new FormControl(property.defaultValue, { updateOn: property.updateOn || modelUpdateOn });
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
