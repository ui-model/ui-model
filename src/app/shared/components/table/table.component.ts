import {Component, OnInit, Input} from "@angular/core";
import {TableField, TableSorter} from "ui-model";

@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit {

  _fields: TableField[];
  get fields(): TableField[] {
    return this._fields;
  }

  @Input() set fields(value: TableField[]) {
    if (this._fields !== value) {
      this._fields = value;
      this.sorter = new TableSorter(this._fields);
    }
  }
  @Input() items: T[];

  sorter: TableSorter;

  delta: {[field: string]: {x: number, y: number}} = {};
  size: {[field: string]: {x: number, y: number}} = {};

  constructor() {
  }

  ngOnInit() {
  }
}
