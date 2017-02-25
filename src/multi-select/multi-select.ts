import { Supplier, Suppliers } from '../utils/supplier';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

interface State<T> {
  option: T;
  value: boolean;
}

export class MultiSelect<T> {
  private selectedStates: Map<T, boolean> = new Map<T, boolean>();

  private _changes: Subject<State<T>> = new Subject();

  get changes(): Observable<State<T>> {
    return this._changes;
  }

  protected changed(value: State<T>): void {
    this._changes.next(value);
  }

  constructor(public options: T[] = [], private supplier: Supplier<T, any> = Suppliers.objectById) {
  }

  get allSelected(): boolean {
    return !this.anyUnselected;
  }

  set allSelected(value: boolean) {
    if (value) {
      this.selectAll();
    } else {
      this.deselectAll();
    }
  }

  get indeterminate(): boolean {
    return this.anySelected && this.anyUnselected;
  }

  get anySelected(): boolean {
    return !!this.options && this.options.filter((option) => this.selected(option)).length > 0;
  }

  get anyUnselected(): boolean {
    return !!this.options && this.options.filter((option) => this.unselected(option)).length > 0;
  }

  selected(option: T): boolean {
    return !!this.selectedStates[this.supplier(option)];
  }

  unselected(option: T): boolean {
    return !this.selected(option);
  }

  selectAs(option: T, value: any): void {
    this.selectedStates[this.supplier(option)] = !!value;
    this.changed({
      option: option,
      value: !!value,
    });
  }

  select(option: T): void {
    this.selectAs(option, true);
  }

  deselect(option: T): void {
    this.selectAs(option, false);
  }

  selectAll(): void {
    this.options.forEach((option) => this.select(option));
  }

  deselectAll(): void {
    this.options.forEach((option) => this.deselect(option));
  }

  toggle(option: T): void {
    this.selectAs(option, !this.selected(option));
  }

  toggleAll(): void {
    this.options.forEach((option) => this.toggle(option));
  }

  get selection(): T[] {
    if (!this.options) {
      return [];
    }

    return this.options.filter((option) => this.selected(option));
  }

  set selection(selections: T[]) {
    selections.forEach((value) => {
      this.select(value);
    });
  }
}
