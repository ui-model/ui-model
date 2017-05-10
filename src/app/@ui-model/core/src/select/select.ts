import { Stateful, Transformer, Transformers } from '@ui-model/common';
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

  setTransformer(value: Transformer<T, any>): this {
    this.transformer = value;
    return this;
  }

  private _valueField = 'id';
  get valueField(): string {
    return this._valueField;
  }

  set valueField(value: string) {
    if (value !== this._valueField) {
      this._valueField = value;
      this.transformer = Transformers.objectByField(value);
    }
  }

  setValueField(field: string): this {
    this.valueField = field;
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
    return this.selection === item || this.transformer(this.selection) === this.transformer(item);
  }

  select(item: T): this {
    const value = this.transformer(item);
    if (!this.selected(value)) {
      this.selection = value;
    }
    return this;
  }

  deselect(): this {
    this.selection = undefined;
    return this;
  }
}
