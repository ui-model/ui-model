import { TableField } from './table-field';
import { SortOrder } from '../utils/sort-order';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

function nextOf(order: SortOrder, defaultOrder: SortOrder): SortOrder {
  if (!order) {
    return defaultOrder;
  } else if (order === SortOrder.Asc) {
    return SortOrder.Desc;
  } else if (order === SortOrder.Desc) {
    return SortOrder.Asc;
  }
}

export class TableSorter extends Subject<TableField> {
  constructor(private fields: TableField[]) {
    super();
  }

  private _changes: Subject<TableField> = new Subject();

  get changes(): Observable<TableField> {
    return this._changes;
  }

  protected changed(): void {
    this._changes.next(this._field);
  }

  private _field: TableField;
  get field(): TableField {
    return this._field;
  }

  compare(v1: any, v2: any): number {
    const field = this._field;
    if (!field) {
      return NaN;
    }
    const reverse = field && field.order === SortOrder.Desc;
    return field.compare(v1, v2) * (reverse ? -1 : 1);
  }

  toggle(field: TableField, defaultOrder: SortOrder = SortOrder.Asc): void {
    if (!field.sortable) {
      return;
    }

    const order = field.order;

    this.fields.forEach((field) => field.order = SortOrder.None);

    if (this._field === field) {
      const nextOrder = nextOf(order, defaultOrder);
      if (nextOrder !== order) {
        field.order = nextOrder;
      }
    } else {
      field.order = defaultOrder;
    }

    this._field = field;
    this.changed();
  }
}
