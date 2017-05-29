import { FormMetadata } from './form-metadata';
export function FormModel(): any {
  return function (target: any): void {
    FormMetadata.ensureMetadata(target.constructor);
  };
}
