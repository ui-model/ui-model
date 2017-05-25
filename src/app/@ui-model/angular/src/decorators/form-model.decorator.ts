const Reflect = window['Reflect'];

export function FormModel(): any {
  return function (target: any): void {
    Reflect.defineMetadata('design:fields', {}, target);
    Reflect.defineMetadata('design:validators', {}, target);
    Reflect.defineMetadata('design:async-validators', {}, target);
  };
}
