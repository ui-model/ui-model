import { ModelDef } from './model-metadata';
import { getOrCreateModelMetadata } from './utils';

export function Model<T extends ModelDef>(metadata?: T): any {
  return function (target: any): void {
    const meta = getOrCreateModelMetadata(target);
    Object.assign(meta, metadata);
  };
}
