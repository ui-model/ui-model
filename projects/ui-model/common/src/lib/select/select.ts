import { BaseModel, objectByField, objectById, Transformer } from '@ui-model/core';

export class Select<T> extends BaseModel {
  _selection: T;

  get selection(): T {
    return this._selection;
  }

  set selection(item: T) {
    this._selection = item;
    this.changed();
  }

  private _transformer: Transformer<T, any> = objectById;

  get transformer(): Transformer<T, any> {
    return this._transformer;
  }

  set transformer(value: Transformer<T, any>) {
    this._transformer = value;
    this.changed();
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

  setTransformer(value: Transformer<T, any>): this {
    this.transformer = value;
    return this;
  }

  setValueField(field: string): this {
    this.valueField = field;
    return this;
  }

  setLabelField(field: string): this {
    this.labelField = field;
    return this;
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
