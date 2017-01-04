import {Supplier, Suppliers} from '../utils/supplier';
import {Subject} from 'rxjs/Subject';
export class Select<T> extends Subject<T> {
  selection: T;

  constructor(private supplier: Supplier<T, any> = Suppliers.object) {
    super();
  }

  selected(item: T): boolean {
    return this.supplier(this.selection) === this.supplier(item);
  }

  select(item: T): void {
    if (this.selection !== item) {
      this.selection = item;
      this.next(item);
    }
  }
}
