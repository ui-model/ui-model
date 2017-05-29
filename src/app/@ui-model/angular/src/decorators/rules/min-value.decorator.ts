import { FieldMetadata } from '../reflect-utils';
import { minValue } from '@ui-model/angular';

export function MinValue(value: number): any {
  return function (target: any, name: string): void {
    const field = FieldMetadata.of(target, name);
    field.addValidator(minValue(value));
  };
}
