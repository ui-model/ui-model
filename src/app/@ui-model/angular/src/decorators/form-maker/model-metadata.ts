import { PropertyMetadata } from './property-metadata';
export interface ModelMetadata extends PropertyMetadata {
  properties?: PropertyMetadata[];
}
