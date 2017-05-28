import { FormMetadata } from './reflect-utils';
export function FormModel(): any {
  return function (target: any): void {
    FormMetadata.ensure(target.constructor);
  };
}
