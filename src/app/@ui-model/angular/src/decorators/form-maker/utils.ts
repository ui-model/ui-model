import { FormMetadata } from './form-metadata';
import { metaKeyForm, metaKeyType, Reflect } from './constants';
import { FieldMetadata } from './field-metadata';
import { isNumber } from '../../validators/is-number.validator';
import { isBoolean } from '../../validators/is-boolean.validator';

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
    field.autoValidators = [];
    switch (field.type) {
      case Number:
        field.autoValidators.unshift(isNumber);
        break;
      case Boolean:
        field.autoValidators.unshift(isBoolean);
        break;
    }
    formMeta.fields.push(field);
    return field;
  }
}
