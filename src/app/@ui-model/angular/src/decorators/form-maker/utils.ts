import { FormMetadata } from './form-metadata';
import { metaKeyForm, Reflect } from './constants';
import { FieldMetadata, metaKeyType } from '@ui-model/angular';

export function getOrCreateFormMetadata(target: any): FormMetadata {
  const result = Reflect.getMetadata(metaKeyForm, target);
  if (result) {
    return result;
  } else {
    const meta: FormMetadata = {fields: []};
    Reflect.defineMetadata(metaKeyForm, meta, target);
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
    const field: FieldMetadata = {name: fieldName, type: Reflect.getMetadata(metaKeyType, target, fieldName)};
    field.isArray = field.type === Array;
    field.isGroup = Reflect.hasMetadata(metaKeyForm, field.type);
    field.isControl = !field.isArray && !field.isGroup;
    formMeta.fields.push(field);
    return field;
  }
}
