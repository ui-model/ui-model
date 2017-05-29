import { FieldMetadata } from './field-metadata';
export function ElementType(type: any): any {
  return function (target: any, name: string): void {
    const field = FieldMetadata.of(target, name);
    field.setArrayElementType(type);
  };
}
