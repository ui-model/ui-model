import {StateListener} from '../utils/state-listener';
import {isFunction, isString} from '../utils/typings';
export abstract class Stateful {
  constructor(private stateListener?: StateListener, private stateKey?: string) {
  }

  private resolve: (value?: this | PromiseLike<this>) => void;
  private reject: (reason?: any) => void;
  protected _changes: PromiseLike<this> = new Promise((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });

  get changes(): PromiseLike<this> {
    return this._changes;
  }

  protected changed(): void {
    this.resolve(this);
    if (this.stateListener && isFunction(this.stateListener.setState)) {
      if (!isString(this.stateKey)) {
        throw new Error('State key is required');
      }
      this.stateListener.setState({[this.stateKey]: this});
    }
  }
}
