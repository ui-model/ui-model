import { addFieldType, addValidator } from '../reflect-utils';
import { minValue } from '@ui-model/angular';

export function MinValue(value: number): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addValidator(target, name, minValue(value));
  };
}
