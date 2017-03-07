import {Transformer, Transformers} from '../utils/transformer';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export class MultiSelect<T> {
  private selectedStates = new Map<T, boolean>();

  private _changes = new Subject();

  get changes(): Observable<T> {
    return this._changes;
  }

  protected changed(value: T): void {
    this._changes.next(value);
  }

  constructor(public options: T[] = [], public transformer: Transformer<T, any> = Transformers.objectById) {
  }

  get allSelected(): boolean {
    return this.options && this.options.length && !this.anyUnselected;
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
    return this.selectedStates.get(this.transformer(option));
  }

  unselected(option: T): boolean {
    return !this.selected(option);
  }

  selectAs(option: T, value: any): void {
    this.selectedStates.set(this.transformer(option), !!value);
    this.changed(option);
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
    if (!selections) {
      return;
    }
    selections.forEach((value) => {
      this.select(value);
    });
  }
}
