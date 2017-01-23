import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class TablePager {
  constructor(recordCount: number = 0, pageSize: number = 10) {
    this.recordCount = recordCount;
    this.pageSize = pageSize;
  }

  private _changes: Subject<TablePager> = new Subject();

  get changes(): Observable<TablePager> {
    return this._changes;
  }

  changed(): void {
    this._changes.next(this);
  }

  private _page: number = 0;

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    value = +value;
    if (value < this.firstPage) {
      value = this.firstPage;
    }
    if (value > this.lastPage) {
      value = this.lastPage;
    }

    if (this._page !== value) {
      this._page = Math.max(value, 0);
      this.changed();
    }
  }

  isActive(page: number): boolean {
    return this.page === page;
  }

  get isFirst(): boolean {
    return this.page <= this.firstPage;
  }

  get isLast(): boolean {
    return this.page >= this.lastPage;
  }

  get firstIndex(): number {
    return this.firstPage * this.pageSize;
  }

  get lastIndex(): number {
    return this.recordCount - 1;
  }

  get offset(): number {
    return Math.max(this.page * this.pageSize, 0);
  }

  get offsetNext(): number {
    return Math.min(this.offset + this.pageSize, this.recordCount);
  }

  get lowBound(): number {
    return this.offset;
  }

  get highBound(): number {
    return this.offsetNext;
  }

  private _pageSize: number = 0;
  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    value = +value;
    if (value < 0) {
      throw new Error('`pageSize` cannot be less than 0');
    }
    if (this._pageSize !== value) {
      const latestOffset = this.offset;
      this._pageSize = value;
      this.page = Math.floor(latestOffset / this._pageSize);
      if (this.page > this.lastPage) {
        this.page = this.lastPage;
      }
      this.changed();
    }
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
      const latestPage = this.page;
      this._recordCount = value;
      this.goTo(latestPage);
      this.changed();
    }
  }

  get isEmpty(): boolean {
    return this.recordCount === 0;
  }

  get pageCount(): number {
    if (this.pageSize === 0) {
      return 0;
    }
    return Math.ceil(this.recordCount / this.pageSize);
  }

  get firstPage(): number {
    return 0;
  }

  get lastPage(): number {
    return this.pageCount - 1;
  }

  prev(step: number = 1): void {
    this.goTo(this.page - step);
  }

  get hasPrev(): boolean {
    return !this.isFirst;
  }

  next(step: number = 1): void {
    this.goTo(this.page + step);
  }

  get hasNext(): boolean {
    return !this.isLast;
  }

  goTo(page: number): void {
    this.page = page;
  }

  goToFirst(): void {
    this.goTo(this.firstPage);
  }

  goToLast(): void {
    this.goTo(this.lastPage);
  }
}
