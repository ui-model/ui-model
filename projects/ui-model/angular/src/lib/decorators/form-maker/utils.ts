import { Type } from '@angular/core';
import { metaKeyModel, metaKeyType } from '../../utils/constants';
import { ModelMetadata } from './model-metadata';
import { PropertyMetadata } from './property-metadata';

export function getOrCreateModelMetadata(target: any): ModelMetadata {
  const result = Reflect.getMetadata(metaKeyModel, target);
  if (result) {
    return result;
  } else {
    const meta = new ModelMetadata();
    Reflect.defineMetadata(metaKeyModel, meta, target);
    return meta;
  }
}

export function getOrCreateProperty(target: any, propertyName: string): PropertyMetadata {
  const formMeta = getOrCreateModelMetadata(target.constructor);
  if (!formMeta.properties) {
    formMeta.properties = [];
  }
  const result = formMeta.properties.find((property) => property.name === propertyName);
  if (result) {
    return result;
  } else {
    const property = new PropertyMetadata();
    Object.assign(property, target);
    property.name = propertyName;
    property.type = Reflect.getMetadata(metaKeyType, target, propertyName);
    if (!property.editor) {
      property.editor = defaultEditorFor(property);
    }
    formMeta.properties.push(property);
    return property;
  }
}

function defaultEditorFor(property: PropertyMetadata): string | Type<Object> {
  switch (property.type) {
    case Number:
      return 'number';
    case Date:
      return 'date';
    default:
      return property.editor;
  }
}
