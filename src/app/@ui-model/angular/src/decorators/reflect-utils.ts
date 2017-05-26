import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
const Reflect = window['Reflect'];

export const metaElementTypes = 'design:elementTypes';
export const metaTypes = 'design:types';
export const metaType = 'design:type';
export const metaValidators = 'design:validators';
export const metaAsyncValidators = 'design:asyncValidators';

export function addValidator(target: any, name: string, validator: ValidatorFn): void {
  if (!validator) {
    return;
  }
  Promise.resolve().then(() => {
    const meta = Reflect.getMetadata(metaValidators, target.constructor);
    if (!meta[name]) {
      meta[name] = [];
    }
    meta[name].push(validator);
  });
}

export function addAsyncValidator(target: any, name: string, validator: AsyncValidatorFn): void {
  if (!validator) {
    return;
  }
  Promise.resolve().then(() => {
    const meta = Reflect.getMetadata(metaAsyncValidators, target.constructor);
    if (!meta[name]) {
      meta[name] = [];
    }
    meta[name].push(validator);
  });
}

export function addFieldType(target: any, name: string): void {
  Promise.resolve().then(() => {
    const metaField = Reflect.getMetadata(metaTypes, target.constructor);
    metaField[name] = Reflect.getMetadata(metaType, target, name);
  });
}

export function addFieldElementType(target: any, name: string, type: any): void {
  Promise.resolve().then(() => {
    const metaField = Reflect.getMetadata(metaElementTypes, target.constructor);
    metaField[name] = type;
  });
}
