import { TableField } from "./table-field";
import { SortOrder } from "../utils/sort-order";
import { Subject } from "rxjs/Subject";

export function nextOf(order: SortOrder, defaultOrder: SortOrder) {
  if (!order) {
    return defaultOrder;
  } else if (order === SortOrder.Asc) {
    return SortOrder.Desc;
  } else if (order === SortOrder.Desc) {
    return SortOrder.Asc;
  }
}

export class TableSorter extends Subject<TableField> {
  field: TableField;

  constructor(private fields: TableField[]) {
    super();
  }

  compare(v1: any, v2: any): number {
    const field = this.field;
    if (!field) {
      return NaN;
    }
    const reverse = field && field.order === SortOrder.Desc;
    return field.compare(v1, v2) * (reverse ? -1 : 1);
  }

  toggle(field: TableField, defaultOrder: SortOrder = SortOrder.Asc) {
    if (!field.sortable) {
      return;
    }

    const order = field.order;

    this.fields.forEach((field) => field.order = SortOrder.None);

    if (this.field === field) {
      const nextOrder = nextOf(order, defaultOrder);
      if (nextOrder !== order) {
        field.order = nextOrder;
      }
    } else {
      field.order = defaultOrder;
    }

    this.field = field;
    this.next(field);
  }
}
