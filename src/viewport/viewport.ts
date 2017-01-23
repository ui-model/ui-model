import { Subject, Observable } from 'rxjs';
export class Viewport<T> {
  constructor(allItems: T[] = [], viewport: number = 5) {
    this._allItems = allItems;
    this._viewport = viewport;
    this.update();
  }

  private _changes: Subject<Viewport<T>> = new Subject();

  get changes(): Observable<Viewport<T>> {
    return this._changes;
  }

  changed(): void {
    this._changes.next(this);
  }

  private _allItems: T[];
  get allItems(): T[] {
    return this._allItems;
  }

  set allItems(value: T[]) {
    this._allItems = value;
    this.update();
  }

  get length(): number {
    return this._allItems.length;
  }

  private _items: T[];
  get items(): T[] {
    return this._items;
  }

  private _viewport: number;
  get viewport(): number {
    return this._viewport;
  }

  set viewport(value: number) {
    this._viewport = value;
    this.update();
  }

  get halfViewport(): number {
    return Math.floor(this.viewport / 2);
  }

  private _index: number = 0;
  get index(): number {
    return this._index;
  }

  set index(value: number) {
    if (value !== this._index) {
      this._index = Math.min(Math.max(value, 0), this.length - 1);
      this.update();
    }
  }

  isActive(index: number): boolean {
    return this.index === index;
  }

  goTo(index: number): void {
    this.index = index;
  }

  prev(step: number = 1): void {
    this.index -= step;
  }

  get hasPrev(): boolean {
    return this.index > 0;
  }

  next(step: number = 1): void {
    this.index += step;
  }

  get hasNext(): boolean {
    return this.index < this.length - 1;
  }

  get lowBound(): number {
    return Math.min(Math.max(this._index - this.halfViewport, 0), this.length - this.viewport);
  }

  get highBound(): number {
    return this.lowBound + this.viewport;
  }

  update(): void {
    this._items = this.allItems.slice(this.lowBound, this.highBound);
    this.changed();
  }
}
