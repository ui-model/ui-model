import {SortOrder} from '../utils/sort-order';
import {Comparators, Comparator} from '../utils/comparator';
import {DataType} from '../utils/data-type';
import {Transformer, Transformers} from '../utils/transformer';
import {isUndefined} from 'util';
export class TableField {
  name: string;
  title: string;
  type = DataType.any;
  sortable?: boolean = true;
  sortOrder?: SortOrder = SortOrder.None;
  scale?: number = 0;
  comparator?: Comparator<any> = Comparators.any;
  formatter?: Transformer<any, string> = Transformers.identity;

  isNonOrder(): boolean {
    return !this.isAscOrder() && !this.isDescOrder();
  }

  isAscOrder(): boolean {
    return this.sortOrder === SortOrder.Asc;
  }

  isDescOrder(): boolean {
    return this.sortOrder === SortOrder.Desc;
  }

  compare(item1: TableField, item2: TableField): number {
    const v1 = item1[this.name];
    const v2 = item2[this.name];
    return this.comparator(v1, v2);
  }

  static of(rawData: any): TableField {
    const result = new TableField();
    if (!isUndefined(rawData.name)) {
      result.name = rawData.name;
    }
    if (!isUndefined(rawData.title)) {
      result.title = rawData.title;
    }
    if (!isUndefined(rawData.type)) {
      result.type = rawData.type;
    }
    if (!isUndefined(rawData.sortable)) {
      result.sortable = rawData.sortable;
    }
    if (!isUndefined(rawData.sortOrder)) {
      result.sortOrder = rawData.sortOrder;
    }
    if (!isUndefined(rawData.scale)) {
      result.scale = rawData.scale;
    }
    if (!isUndefined(rawData.comparator)) {
      result.comparator = rawData.comparator;
    }
    if (!isUndefined(rawData.formatter)) {
      result.formatter = rawData.formatter;
    }

    return result;
  }

  static from(rawData: any[]): TableField[] {
    return rawData.map(TableField.of);
  }
}
