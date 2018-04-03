import { isBoolean } from '../../validators/is-boolean.validator';
import { isNumber } from '../../validators/is-number.validator';
import { metaKeyModel, metaKeyType } from './constants';
import { ModelMetadata } from './model-metadata';
import { PropertyMetadata } from './property-metadata';
import 'reflect-metadata';

export function getOrCreateModelMetadata(target: any): ModelMetadata {
  const result = Reflect.getMetadata(metaKeyModel, target);
  if (result) {
    return result;
  } else {
    const meta: ModelMetadata = {properties: []};
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
    const property: PropertyMetadata = {
      name: propertyName,
      type: Reflect.getMetadata(metaKeyType, target, propertyName),
    };
    property.isArray = property.type === Array;
    property.isGroup = Reflect.hasMetadata(metaKeyModel, property.type);
    property.isControl = !property.isArray && !property.isGroup;
    property.dataTypeValidators = [];
    switch (property.type) {
      case Number:
        property.editor = 'number';
        property.dataTypeValidators = [isNumber];
        break;
      case Boolean:
        property.dataTypeValidators = [isBoolean];
        break;
    }
    formMeta.properties.push(property);
    return property;
  }
}
