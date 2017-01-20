import { Supplier, Suppliers } from '../utils/supplier';
import { Subject } from 'rxjs/Subject';
export class Select<T> extends Subject<T> {
  _selection: T;

  get selection(): T {
    return this._selection;
  }

  set selection(item: T) {
    this._selection = item;
    this.next(item);
  }

  constructor(private supplier: Supplier<T, any> = Suppliers.objectById) {
    super();
  }

  selected(item: T): boolean {
    return this.supplier(this.selection) === this.supplier(item);
  }

  select(item: T): void {
    if (!this.selected(item)) {
      this.selection = item;
    }
  }
}
