import { FieldMetadata } from './field-metadata';
export interface FormMetadata extends FieldMetadata {
  fields?: FieldMetadata[];
}
