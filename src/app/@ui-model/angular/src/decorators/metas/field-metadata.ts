import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { metaForm, metaType, Reflect } from './constants';
import { FormMetadata } from './form-metadata';
export class FieldMetadata {
  name: string;
  type: any;
  arrayElementType: any;
  validators: ValidatorFn[] = [];
  asyncValidators: AsyncValidatorFn[] = [];

  get isArray(): boolean {
    return this.type === Array;
  }

  get isSubModel(): boolean {
    return Reflect.hasMetadata(metaForm, this.type);
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setType(type: any): this {
    this.type = type;
    return this;
  }

  setArrayElementType(type: any): this {
    this.type = type;
    return this;
  }

  addValidator(validator: ValidatorFn): this {
    if (validator && this.validators.indexOf(validator)) {
      this.validators.push(validator);
    }
    return this;
  }

  addAsyncValidator(asyncValidator: AsyncValidatorFn): this {
    if (asyncValidator && this.asyncValidators.indexOf(asyncValidator)) {
      this.asyncValidators.push(asyncValidator);
    }
    return this;
  }

  static of(target: any, fieldName: string): FieldMetadata {
    FieldMetadata.ensureMetadata(target, fieldName);
    const meta = FormMetadata.of(target);
    return meta.fieldOf(fieldName);
  }

  static ensureMetadata(clazz: any, name: string): void {
    const meta = FormMetadata.of(clazz);
    const type = Reflect.getMetadata(metaType, clazz, name);
    meta.fieldOf(name).setType(type);
  }
}
