import { objectByField, objectById, Stateful, Transformer } from '@ui-model/common';

export class Select<T> extends Stateful {
  _selection: T;

  private _transformer: Transformer<T, any> = objectById();
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
      this.transformer = objectByField(value);
    }
  }

  setValueField(field: string): this {
    this.valueField = field;
    return this;
  }

  private _labelField = 'label';
  get labelField(): string {
    return this._labelField;
  }

  set labelField(label: string) {
    if (label !== this._labelField) {
      this._labelField = label;
      this.transformer = objectByField(label);
    }
  }

  setLabelField(field: string): this {
    this.labelField = field;
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

  isActive(item: T): boolean {
    return this.selected(item);
  }

  select(item: T): this {
    if (!this.selected(this.transformer(item))) {
      this.selection = item;
    }
    return this;
  }

  deselect(): this {
    this.selection = undefined;
    return this;
  }
}
