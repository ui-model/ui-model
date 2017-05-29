import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export const Reflect = window['Reflect'];
export const metaType = 'design:type';
export const metaForm = '_meta:ui-model:form';
export const metaField = '_meta:ui-model:form-field';

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

export class FormMetadata {
  fields: FieldMetadata[] = [];

  fieldOf(name: string): FieldMetadata {
    let field = this.fields.find((item) => item.name === name);
    if (!field) {
      field = new FieldMetadata().setName(name);
      this.fields.push(field);
    }
    return field;
  }

  static of(target: any): FormMetadata {
    const clazz = target.constructor;
    FormMetadata.ensureMetadata(clazz);
    return Reflect.getMetadata(metaForm, clazz) as FormMetadata;
  }

  static ensureMetadata(clazz: any): void {
    if (!Reflect.hasMetadata(metaForm, clazz)) {
      Reflect.defineMetadata(metaForm, new FormMetadata(), clazz);
    }
  }
}
