import { addFieldType } from '../reflect-utils';
export function Null(): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
  };
}
