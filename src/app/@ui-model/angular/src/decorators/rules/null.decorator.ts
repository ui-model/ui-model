import { FieldMetadata } from '../reflect-utils';
export function Null(): any {
  return function (target: any, name: string): void {
    FieldMetadata.ensureMetadata(target, name);
  };
}
