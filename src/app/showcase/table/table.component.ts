import { Component, OnInit } from '@angular/core';
import { TableField, DataType, TableSorter } from 'ui-model';
import * as _ from 'lodash';

class Item {
  id: number;
  name: string;
  birthday: Date;
  age: number;
  income: number;
}

const fields = [
  {
    name: 'id',
    title: 'ID',
    type: DataType.int
  },
  {
    name: 'name',
    title: 'User Name',
    type: DataType.string
  },
  {
    name: 'birthday',
    title: 'Birthday',
    type: DataType.date,
    sortable: false,
  },
  {
    name: 'age',
    title: 'Age',
    type: DataType.int,
  },
  {
    name: 'income',
    title: 'Income',
    type: DataType.currency,
    scale: 2,
  },
].map(TableField.from);

const items: Item[] = _.times(100, (i) => {
  return {
    id: i + 1,
    name: `user-${i}`,
    birthday: new Date(1900 + i, 0, 1),
    age: i % 20,
    income: i * 300.05
  };
});

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  fields: TableField[] = fields;
  items: Item[] = items;
  sorter: TableSorter = new TableSorter(fields);
  delta: {[field: string]: {x: number, y: number}} = {};
  size: {[field: string]: {x: number, y: number}} = {};

  constructor() {
  }

  ngOnInit() {
  }
}
