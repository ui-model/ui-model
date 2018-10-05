import { PropertyDef } from './property-metadata';
import { getOrCreateProperty } from './utils';

export function Property<T extends PropertyDef>(metadata?: T): any {
  return function (target: any, name: string): void {
    const property = getOrCreateProperty(target, name);
    Object.assign(property, metadata);
  };
}
