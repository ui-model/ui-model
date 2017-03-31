import {TableField} from './table-field';
import {SortOrder, Stateful} from '@ui-model/common';

function nextOf(order: SortOrder, defaultOrder: SortOrder): SortOrder {
  if (!order) {
    return defaultOrder;
  } else if (order === SortOrder.Asc) {
    return SortOrder.Desc;
  } else if (order === SortOrder.Desc) {
    return SortOrder.Asc;
  }
}

export class TableSorter extends Stateful {

  private _fields: TableField[] = [];

  get fields(): TableField[] {
    return this._fields;
  }

  set fields(value: TableField[]) {
    this._fields = value;
    this.changed();
  }

  setFields(value: TableField[]): this {
    this.fields = value;
    return this;
  }

  get field(): TableField {
    return this._field;
  }

  enabled = true;

  get disabled(): boolean {
    return !this.enabled;
  }

  set disabled(value: boolean) {
    this.enabled = !value;
  }

  setDisabled(value: boolean): this {
    this.disabled = value;
    return this;
  }

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  compare(v1: any, v2: any): number {
    const field = this._field;
    if (!field) {
      return NaN;
    }
    const reverse = field && field.sortOrder === SortOrder.Desc;
    return field.compare(v1, v2) * (reverse ? -1 : 1);
  }

  toggle(field: TableField, defaultOrder: SortOrder = SortOrder.Asc): void {
    if (this.disabled || !field.sortable) {
      return;
    }

    const order = field.sortOrder;

    this.fields.forEach((value) => value.sortOrder = SortOrder.None);

    if (this._field === field) {
      const nextOrder = nextOf(order, defaultOrder);
      if (nextOrder !== order) {
        field.sortOrder = nextOrder;
      }
    } else {
      field.sortOrder = defaultOrder;
    }

    this._field = field;
    this.changed();
  }

  private _field: TableField;
}
