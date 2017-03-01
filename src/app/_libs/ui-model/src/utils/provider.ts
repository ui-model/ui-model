import {isFunction} from 'util';
export type Provider<T>  = () => T;

export function getOrCall<T>(value: T | Provider<T>, context?: any): T {
  if (isFunction(value)) {
    return (value as Provider<T>).call(context);
  } else {
    return (value as T);
  }
}
