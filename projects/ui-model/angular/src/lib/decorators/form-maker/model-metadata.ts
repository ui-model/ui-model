import { PropertyMetadata } from './property-metadata';
import { FormHooks } from '../../utils/polyfills';

export interface ModelDef {
  updateOn?: FormHooks;
}

export class ModelMetadata implements ModelDef {
  updateOn: FormHooks = 'change';
  properties: PropertyMetadata[] = [];
}
