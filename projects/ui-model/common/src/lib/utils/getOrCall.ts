import { Supplier } from './supplier';
import { isFunction } from './typings';

export function getOrCall<T>(value: T | Supplier<T>, context?: any): T {
  if (isFunction(value)) {
    return (value as Supplier<T>).call(context);
  } else {
    return (value as T);
  }
}
