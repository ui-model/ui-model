import { FormMetadata } from './form-metadata';
import { getOrCreateFormMetadata } from './utils';
export function Form(metadata: FormMetadata = {}): any {
  return function (target: any): void {
    const meta = getOrCreateFormMetadata(target);
    Object.assign(meta, metadata);
  };
}
