import { metaAsyncValidators, metaElementTypes, metaTypes, metaValidators, Reflect } from './reflect-utils';

export function FormModel(): any {
  return function (target: any): void {
    Reflect.defineMetadata(metaElementTypes, {}, target);
    Reflect.defineMetadata(metaTypes, {}, target);
    Reflect.defineMetadata(metaValidators, {}, target);
    Reflect.defineMetadata(metaAsyncValidators, {}, target);
  };
}
