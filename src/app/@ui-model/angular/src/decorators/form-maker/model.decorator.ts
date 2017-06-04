import { ModelMetadata } from './model-metadata';
import { getOrCreateModelMetadata } from './utils';
export function Model(metadata: ModelMetadata = {}): any {
  return function (target: any): void {
    const meta = getOrCreateModelMetadata(target);
    Object.assign(meta, metadata);
  };
}
