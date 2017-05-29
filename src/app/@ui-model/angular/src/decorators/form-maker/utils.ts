import { FormMetadata } from './form-metadata';
import { metaForm, Reflect } from './constants';
import { FieldMetadata, metaType } from '@ui-model/angular';

export function getOrCreateFormMetadata(target: any): FormMetadata {
  const result = Reflect.getMetadata(metaForm, target);
  if (result) {
    return result;
  } else {
    const meta: FormMetadata = {fields: []};
    Reflect.defineMetadata(metaForm, meta, target);
    return meta;
  }
}

export function getOrCreateField(target: any, fieldName: string): FieldMetadata {
  const formMeta = getOrCreateFormMetadata(target.constructor);
  if (!formMeta.fields) {
    formMeta.fields = [];
  }
  const result = formMeta.fields.find((field) => field.name === fieldName);
  if (result) {
    return result;
  } else {
    const field = {name: fieldName, type: Reflect.getMetadata(metaType, target, fieldName)};
    formMeta.fields.push(field);
    return field;
  }
}
