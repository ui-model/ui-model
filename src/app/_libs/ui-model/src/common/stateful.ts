import {StateListener} from '../utils/state-listener';
import {isFunction, isString} from '../utils/typings';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
export abstract class Stateful {
  constructor(private stateListener?: StateListener, private stateKey?: string) {
  }

  private _changes = new Subject<this>();

  get changes(): Observable<this> {
    return this._changes.asObservable();
  }

  protected changed(): void {
    this._changes.next(this);
    if (this.stateListener && isFunction(this.stateListener.setState)) {
      if (!isString(this.stateKey)) {
        throw new Error('State key is required');
      }
      this.stateListener.setState({[this.stateKey]: this});
    }
  }
}
