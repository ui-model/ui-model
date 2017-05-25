import { addFieldType, addValidator } from '../reflect-utils';
import { maxValue } from '@ui-model/angular';

export function MaxValue(value: number): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addValidator(target, name, maxValue(value));
  };
}
