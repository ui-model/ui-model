import { metaAsyncValidators, metaElementTypes, metaTypes, metaValidators } from './reflect-utils';
const Reflect = window['Reflect'];

export function FormModel(): any {
  return function (target: any): void {
    Reflect.defineMetadata(metaElementTypes, {}, target);
    Reflect.defineMetadata(metaTypes, {}, target);
    Reflect.defineMetadata(metaValidators, {}, target);
    Reflect.defineMetadata(metaAsyncValidators, {}, target);
  };
}
