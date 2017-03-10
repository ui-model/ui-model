import {Transformer, Transformers} from '../utils/transformer';
import {Ui} from '../common/ui';
import {StateListener} from '../utils/state-listener';

export class MultiSelect<T> extends Ui {
  private selectedStates = new Map<T, boolean>();

  constructor(public options: T[] = [], public transformer: Transformer<T, any> = Transformers.objectById,
              stateListener?: StateListener, stateKey?: string) {
    super(stateListener, stateKey);
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
    this.changed();
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
