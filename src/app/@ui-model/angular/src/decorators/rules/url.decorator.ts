import { addFieldType, addValidator } from '../reflect-utils';
import { url } from '../../validators/url.validator';

export function Url(): any {
  return function (target: any, name: string): void {
    addFieldType(target, name);
    addValidator(target, name, url);
  };
}
