import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
const Reflect = window['Reflect'];

export function addValidator(target: any, name: string, validator: ValidatorFn): void {
  if (!validator) {
    return;
  }
  Promise.resolve().then(() => {
    const meta = Reflect.getMetadata('design:validators', target.constructor);
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
    const meta = Reflect.getMetadata('design:async-validators', target.constructor);
    if (!meta[name]) {
      meta[name] = [];
    }
    meta[name].push(validator);
  });
}

export function addFieldType(target: any, name: string): void {
  Promise.resolve().then(() => {
    const meta = Reflect.getMetadata('design:fields', target.constructor);
    meta[name] = Reflect.getMetadata('design:type', target, name);
  });
}
