import {Stateful, Transformer, Transformers} from '@ui-model/common';
export class Select<T> extends Stateful {
  _selection: T;

  private _transformer: Transformer<T, any> = Transformers.objectById;
  get transformer(): Transformer<T, any> {
    return this._transformer;
  }

  set transformer(value: Transformer<T, any>) {
    this._transformer = value;
    this.changed();
  }

  setTransformer(value: Transformer<T, any>) {
    this.transformer = value;
    return this;
  }

  get selection(): T {
    return this._selection;
  }

  set selection(item: T) {
    this._selection = item;
    this.changed();
  }

  setSelection(value: T): this {
    this.selection = value;
    return this;
  }

  selected(item: T): boolean {
    return this.transformer(this.selection) === this.transformer(item);
  }

  select(item: T): this {
    if (!this.selected(item)) {
      this.selection = item;
    }
    return this;
  }

  deselect(): this {
    this.selection = undefined;
    return this;
  }
}
