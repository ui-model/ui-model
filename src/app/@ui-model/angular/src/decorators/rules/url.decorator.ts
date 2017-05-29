import { FieldMetadata } from '../reflect-utils';
import { url } from '../../validators/url.validator';

export function Url(): any {
  return function (target: any, name: string): void {
    const field = FieldMetadata.of(target, name);
    field.addValidator(url);
  };
}
