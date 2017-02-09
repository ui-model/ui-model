import {Component, OnInit, Input} from "@angular/core";
import {TableField, TableSorter} from "ui-model";

@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  inputs: ['fields', 'sortable'],
})
export class TableComponent<T> implements OnInit {

  _fields: TableField[];
  get fields(): TableField[] {
    return this._fields;
  }

  set fields(value: TableField[]) {
    if (this._fields !== value) {
      this._fields = value;
      this.sorter = new TableSorter(this._fields);
    }
  }

  @Input() items: T[];

  get sortable(): boolean {
    return this.sorter.enabled;
  }

  set sortable(value: boolean) {
    this.sorter.enabled = value;
  }

  sorter: TableSorter;

  delta: {[field: string]: {x: number, y: number}} = {};
  size: {[field: string]: {x: number, y: number}} = {};

  constructor() {
  }

  ngOnInit() {
  }
}
