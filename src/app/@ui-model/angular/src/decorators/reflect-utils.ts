import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export const Reflect = window['Reflect'];
export const metaType = 'design:type';
export const metaForm = 'design:ui-model:form';
export const metaField = 'design:ui-model:form-field';

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

  addValidator(validator: ValidatorFn): void {
    if (validator && this.validators.indexOf(validator)) {
      this.validators.push(validator);
    }
  }

  addAsyncValidator(asyncValidator: AsyncValidatorFn): void {
    if (asyncValidator && this.asyncValidators.indexOf(asyncValidator)) {
      this.asyncValidators.push(asyncValidator);
    }
  }

  static of(field: any): FieldMetadata {
    return Reflect.getMetadata(metaField, field) as FieldMetadata;
  }
}

export class FormMetadata {
  fields: FieldMetadata[] = [];

  fieldOf(name: string): FieldMetadata {
    let field = this.fields.find((item) => item.name === name);
    if (!field) {
      field = new FieldMetadata();
      field.name = name;
      this.fields.push(field);
    }
    return field;
  }

  static of(target: any): FormMetadata {
    const clazz = target.constructor;
    FormMetadata.ensure(clazz);
    return Reflect.getMetadata(metaForm, clazz) as FormMetadata;
  }

  static ensure(clazz: any): void {
    if (!Reflect.hasMetadata(metaForm, clazz)) {
      Reflect.defineMetadata(metaForm, new FormMetadata(), clazz);
    }
  }
}

export function addValidator(target: any, name: string, validator: ValidatorFn): void {
  const meta = FormMetadata.of(target);
  const field = meta.fieldOf(name);
  field.addValidator(validator);
}

export function addAsyncValidator(target: any, name: string, validator: AsyncValidatorFn): void {
  const meta = FormMetadata.of(target);
  const field = meta.fieldOf(name);
  field.addAsyncValidator(validator);
}

export function addFieldType(target: any, name: string): void {
  const meta = FormMetadata.of(target);
  const field = meta.fieldOf(name);
  field.type = Reflect.getMetadata(metaType, target, name);
}

export function addFieldElementType(target: any, name: string, type: any): void {
  const meta = FormMetadata.of(target);
  const field = meta.fieldOf(name);
  field.arrayElementType = type;
}
