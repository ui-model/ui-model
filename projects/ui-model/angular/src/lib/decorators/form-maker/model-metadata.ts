import { FormHooks } from '@angular/forms/src/model';
import { PropertyMetadata } from './property-metadata';

export interface ModelDef {
  updateOn?: FormHooks;
}

export class ModelMetadata implements ModelDef {
  updateOn: FormHooks = 'change';
  properties: PropertyMetadata[] = [];
}
