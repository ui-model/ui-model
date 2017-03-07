import {Transformer, Transformers} from '../utils/transformer';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
export class Select<T> {
  constructor(private transformer: Transformer<T, any> = Transformers.objectById) {
  }

  private _changes = new Subject();

  get changes(): Observable<T> {
    return this._changes;
  }

  protected changed(): void {
    this._changes.next(this._selection);
  }

  _selection: T;

  get selection(): T {
    return this._selection;
  }

  set selection(item: T) {
    this._selection = item;
    this.changed();
  }

  selected(item: T): boolean {
    return this.transformer(this.selection) === this.transformer(item);
  }

  select(item: T): void {
    if (!this.selected(item)) {
      this.selection = item;
    }
  }
}
