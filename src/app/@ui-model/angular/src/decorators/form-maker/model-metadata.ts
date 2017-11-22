import { FormHooks } from '@angular/forms/src/model';
import { PropertyMetadata } from './property-metadata';

export interface ModelMetadata {
  updateOn?: FormHooks;
  properties?: PropertyMetadata[];
}
