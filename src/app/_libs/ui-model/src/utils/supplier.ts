import {isFunction} from 'util';
export type Supplier<T>  = () => T;

export function getOrCall<T>(value: T | Supplier<T>, context?: any): T {
  if (isFunction(value)) {
    return (value as Supplier<T>).call(context);
  } else {
    return (value as T);
  }
}
