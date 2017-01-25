import {SortOrder} from '../utils/sort-order';
import {Comparators} from '../utils/comparator';
import {DataType} from '../utils/data-type';
import {Supplier, Suppliers} from '../utils/supplier';
import {isUndefined} from 'util';
export class TableField {
  name: string;
  title: string;
  type: DataType = DataType.any;
  sortable?: boolean = true;
  order?: SortOrder = SortOrder.None;
  scale?: number = 0;
  comparator?: (v1: any, v2: any) => number = Comparators.any;
  formatter?: Supplier<any, string> = Suppliers.identity;

  isNonOrder(): boolean {
    return !this.isAscOrder() && !this.isDescOrder();
  }

  isAscOrder(): boolean {
    return this.order === SortOrder.Asc;
  }

  isDescOrder(): boolean {
    return this.order === SortOrder.Desc;
  }

  compare(item1: TableField, item2: TableField): number {
    const v1 = item1[this.name];
    const v2 = item2[this.name];
    return this.comparator(v1, v2);
  }

  static from(rawData: TableField): TableField {
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
    if (!isUndefined(rawData.order)) {
      result.order = rawData.order;
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
}
