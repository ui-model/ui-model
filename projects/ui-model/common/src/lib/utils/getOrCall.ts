import { isFunction } from './typings';
import { Supplier } from './supplier';

export function getOrCall<T>(value: T | Supplier<T>, context?: any): T {
  if (isFunction(value)) {
    return (value as Supplier<T>).call(context);
  } else {
    return (value as T);
  }
}
