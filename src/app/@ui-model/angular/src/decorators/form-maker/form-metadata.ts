import { FieldMetadata } from '@ui-model/angular';
export interface FormMetadata extends FieldMetadata {
  fields?: FieldMetadata[];
}
