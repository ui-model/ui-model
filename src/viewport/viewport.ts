import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
export class Viewport<T> {
  constructor(items: T[] = [], visibleCount: number = 5) {
    this._items = items;
    this._visibleCount = visibleCount;
    this.update();
  }

  private _changes: Subject<Viewport<T>> = new Subject();

  get changes(): Observable<Viewport<T>> {
    return this._changes;
  }

  changed(): void {
    this._changes.next(this);
  }

  private _items: T[];
  get items(): T[] {
    return this._items;
  }

  set items(value: T[]) {
    this._items = value;
    this.update();
  }

  get size(): number {
    return this._items.length;
  }

  private _visibleItems: T[];
  get visibleItems(): T[] {
    return this._visibleItems;
  }

  private _visibleCount: number;
  get visibleCount(): number {
    return this._visibleCount;
  }

  set visibleCount(value: number) {
    this._visibleCount = value;
    this.update();
  }

  private get halfVisibleCount(): number {
    return Math.floor(this.visibleCount / 2);
  }

  private _index: number = 0;
  get index(): number {
    return this._index;
  }

  set index(value: number) {
    if (value !== this._index) {
      this._index = Math.min(Math.max(value, 0), this.size - 1);
      this.update();
    }
  }

  get head(): number {
    return 0;
  }
  get tail(): number {
    return this.size - 1;
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

  get hasFirst(): boolean {
    return this.index > this.halfVisibleCount;
  }

  next(step: number = 1): void {
    this.index += step;
  }

  get hasNext(): boolean {
    return this.index < this.size - 1;
  }

  get hasLast(): boolean {
    return this.index < this.size - this.halfVisibleCount - 1;
  }

  get begin(): number {
    return Math.min(Math.max(this._index - this.halfVisibleCount, 0), this.size - this.visibleCount);
  }

  get end(): number {
    return this.begin + this.visibleCount;
  }

  update(): void {
    this._visibleItems = this.items.slice(this.begin, this.end);
    this.changed();
  }
}
