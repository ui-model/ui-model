import { FieldMetadata } from './field-metadata';
import { metaForm, Reflect } from './constants';
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
