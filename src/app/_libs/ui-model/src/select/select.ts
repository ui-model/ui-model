import {Transformer, Transformers} from '../utils/transformer';
import {Ui} from '../common/ui';
import {StateListener} from '../utils/state-listener';
export class Select<T> extends Ui {
  constructor(private transformer: Transformer<T, any> = Transformers.objectById, stateListener?: StateListener, stateKey?: string) {
    super(stateListener, stateKey);
  }

  _selection: T;

  get selection(): T {
    return this._selection;
  }

  set selection(item: T) {
    this._selection = item;
    this.changed();
  }

  selected(item: T): boolean {
    return this.transformer(this.selection) === this.transformer(item);
  }

  select(item: T): void {
    if (!this.selected(item)) {
      this.selection = item;
    }
  }
}
