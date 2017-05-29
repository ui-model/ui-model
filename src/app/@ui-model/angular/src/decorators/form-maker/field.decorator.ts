import { FieldMetadata } from './field-metadata';
import { getOrCreateField } from './utils';
export function Field(metadata: FieldMetadata = {}): any {
  return function (target: any, name: string): void {
    const field = getOrCreateField(target, name);
    Object.assign(field, metadata);
  };
}
