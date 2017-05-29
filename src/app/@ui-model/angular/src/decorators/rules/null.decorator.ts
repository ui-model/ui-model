import { FieldMetadata } from '../metas';
export function Null(): any {
  return function (target: any, name: string): void {
    FieldMetadata.ensureMetadata(target, name);
  };
}
