import { addFieldElementType } from './reflect-utils';
export function ElementType(type: any): any {
  return function (target: any, name: string): void {
    addFieldElementType(target, name, type);
  };
}
