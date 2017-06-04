import { PropertyMetadata } from './property-metadata';
import { getOrCreateProperty } from './utils';
export function Property(metadata: PropertyMetadata = {}): any {
  return function (target: any, name: string): void {
    const property = getOrCreateProperty(target, name);
    Object.assign(property, metadata);
  };
}
