import { Observable, ObservableInput } from 'rxjs/Observable';
export function defaultIfError<T, R>(defaultValue?: R): (err: any, caught: Observable<T>) => ObservableInput<R> {
  return function v(error: any, caught: Observable<T>): ObservableInput<R> {
    return Observable.of(defaultValue);
  };
}
