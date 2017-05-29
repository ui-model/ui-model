import { FieldMetadata } from '../metas';
import { maxValue } from '@ui-model/angular';

export function MaxValue(value: number): any {
  return function (target: any, name: string): void {
    const field = FieldMetadata.of(target, name);
    field.addValidator(maxValue(value));
  };
}
