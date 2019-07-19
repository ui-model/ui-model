import { Component, Input } from '@angular/core';
import { TableField, TableSorter } from '@ui-model/common';
import { SortOrder } from '@ui-model/core';

@Component({
  selector: 'ui-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
})
export class TableComponent<T> {

  @Input() items: T[] = [];
  sorter = new TableSorter().setFields(this.fields);
  size = {};

  _fields: TableField[] = [];

  get fields(): TableField[] {
    return this._fields;
  }

  @Input()
  set fields(value: TableField[]) {
    if (this._fields !== value) {
      this._fields = value;
      this.sorter.fields = value;
    }
  }

  get sortable(): boolean {
    return this.sorter.enabled;
  }

  @Input()
  set sortable(value: boolean) {
    this.sorter.enabled = value;
  }

  orderCss(order: SortOrder): string {
    switch (order) {
      case SortOrder.Asc:
        return 'fa-sort-asc';
      case SortOrder.Desc:
        return 'fa-sort-desc';
      case SortOrder.None:
      default:
        return 'fa-sort';
    }
  }
}
