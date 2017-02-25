import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class Pager {
  constructor(size: number = 10, recordCount: number = 0) {
    this.recordCount = recordCount;
    this.size = size;
  }

  private _changes: Subject<number> = new Subject();

  get changes(): Observable<number> {
    return this._changes;
  }

  protected changed(): void {
    this._changes.next(this.index);
  }

  private _index: number = 0;

  get index(): number {
    return this._index;
  }

  set index(value: number) {
    value = +value;
    if (value < this.indexMin) {
      value = this.indexMin;
    }
    if (value > this.indexMax) {
      value = this.indexMax;
    }

    if (this._index !== value) {
      this._index = Math.max(value, 0);
      this.changed();
    }
  }

  isActive(page: number): boolean {
    return this.index === page;
  }

  get isFirst(): boolean {
    return this.index <= this.indexMin;
  }

  get isLast(): boolean {
    return this.index >= this.indexMax;
  }

  get offset(): number {
    return Math.max(this.index * this.size, 0);
  }

  private _size: number = 0;
  get size(): number {
    return this._size;
  }

  set size(value: number) {
    value = +value;
    if (value < 0) {
      throw new Error('`pageSize` cannot be less than 0');
    }
    if (this._size !== value) {
      const latestOffset = this.offset;
      this._size = value;
      this.index = Math.floor(latestOffset / this._size);
      if (this.index > this.indexMax) {
        this.index = this.indexMax;
      }
      this.changed();
    }
  }

  get begin(): number {
    return this.offset;
  }

  get end(): number {
    return Math.min(this.offset + this.size, this.recordCount);
  }

  private _recordCount: number = 0;
  get recordCount(): number {
    return this._recordCount;
  }

  set recordCount(value: number) {
    value = +value;
    if (value < 0) {
      throw new Error('`recordCount` cannot be less than 0');
    }

    if (this._recordCount !== value) {
      const latestPage = this.index;
      this._recordCount = value;
      this.goTo(latestPage);
      this.changed();
    }
  }

  get isEmpty(): boolean {
    return this.recordCount === 0;
  }

  get count(): number {
    if (this.size === 0) {
      return 0;
    }
    return Math.ceil(this.recordCount / this.size);
  }

  get indexMin(): number {
    return 0;
  }

  get indexMax(): number {
    return this.count - 1;
  }

  prev(step: number = 1): void {
    this.index -= step;
  }

  get hasPrev(): boolean {
    return !this.isFirst;
  }

  next(step: number = 1): void {
    this.index += step;
  }

  get hasNext(): boolean {
    return !this.isLast;
  }

  goTo(page: number): void {
    this.index = page;
  }

  goToFirst(): void {
    this.goTo(this.indexMin);
  }

  goToLast(): void {
    this.goTo(this.indexMax);
  }
}
