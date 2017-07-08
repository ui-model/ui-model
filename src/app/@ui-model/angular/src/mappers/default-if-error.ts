import { Observable, ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export function defaultIfError<T, R>(defaultValue?: R): (err: any, caught: Observable<T>) => ObservableInput<R> {
  return function v(): ObservableInput<R> {
    return Observable.of(defaultValue);
  };
}
