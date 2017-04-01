import {Rect, Stateful} from '@ui-model/common';
export class Viewport<T> extends Stateful {
  get dataSource(): T[] {
    return this._dataSource;
  }

  set dataSource(value: T[]) {
    if (value !== this._dataSource) {
      this._dataSource = value;
      this.changed();
    }
  }

  setDataSource(value: T[]): this {
    this.dataSource = value;
    return this;
  }

  private _dataSource: T[] = [];

  get items(): T[] {
    return this._items;
  }

  private _items: T[] = [];

  get offset(): number {
    return this._offset;
  }

  set offset(value: number) {
    if (value !== this._offset) {
      this._offset = value;
      this.changed();
    }
  }

  setOffset(value: number): this {
    this.offset = value;
    return this;
  }

  private _offset = 0;

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    if (value !== this._size) {
      this._size = value;
      this.changed();
    }
  }

  setSize(value: number): this {
    this.size = value;
    return this;
  }

  private _size = 10;

  get itemHeight(): number {
    return this._itemHeight;
  }

  set itemHeight(value: number) {
    if (value !== this.itemHeight) {
      this._itemHeight = value;
      this.changed();
    }
  }

  setItemHeight(value: number): this {
    this.itemHeight = value;
    return this;
  }

  private _itemHeight: number;

  get count(): number {
    return this.dataSource.length;
  }

  get height(): number {
    return this.itemHeight * this.count;
  }

  get headerCount(): number {
    return this.offset;
  }

  get headerHeight(): number {
    return this.itemHeight * this.headerCount;
  }

  get bodyCount(): number {
    return this.size;
  }

  get bodyHeight(): number {
    return this.itemHeight * this.bodyCount;
  }

  get footerCount(): number {
    return this.count - this.headerCount - this.bodyCount;
  }

  get footerHeight(): number {
    return this.itemHeight * this.footerCount;
  }

  scrollTo(rect: Rect): this {
    this.offset = Math.floor(rect.top / this.itemHeight);
    return this;
  }

  changed(): void {
    this._items = this.dataSource.slice(this.offset, this.offset + this.size);
  }
}
