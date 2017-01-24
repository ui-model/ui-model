import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
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

  get firstIndex(): number {
    return 0;
  }
  get lastIndex(): number {
    return this.length - 1;
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

  get hasPrevMore(): boolean {
    return this.index > this.halfViewport + 1;
  }

  get hasFirst(): boolean {
    return this.index > this.halfViewport;
  }
  next(step: number = 1): void {
    this.index += step;
  }

  get hasNext(): boolean {
    return this.index < this.length - 1;
  }

  get hasNextMore(): boolean {
    return this.index < this.length - this.halfViewport - 2;
  }

  get hasLast(): boolean {
    return this.index < this.length - this.halfViewport - 1;
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
