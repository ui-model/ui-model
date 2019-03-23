import { BaseModel } from '../common/base-model';

export class Rect extends BaseModel {
  private _left = 0;
  get left(): number {
    return this._left;
  }

  set left(value: number) {
    this._left = value;
    this.changed();
  }

  setLeft(value: number): this {
    this.left = value;
    return this;
  }

  private _top = 0;
  get top(): number {
    return this._top;
  }

  set top(value: number) {
    this._top = value;
    this.changed();
  }

  setTop(value: number): this {
    this.top = value;
    return this;
  }

  private _width = 0;
  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
    this.changed();
  }

  setWidth(value: number): this {
    this.width = value;
    return this;
  }

  private _height = 0;
  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
    this.changed();
  }

  setHeight(value: number): this {
    this.height = value;
    return this;
  }

  limit = Rect.InfinityRect;

  limitTo(limit: Rect): Rect {
    this.limit = limit;
    return this;
  }

  get right(): number {
    return this.left + this.width;
  }

  get bottom(): number {
    return this.top + this.height;
  }

  get ratio(): number {
    return this.width / this.height;
  }

  get halfWidth(): number {
    return this.width / 2;
  }

  get halfHeight(): number {
    return this.height / 2;
  }

  get centerX(): number {
    return this.left + this.halfWidth;
  }

  get centerY(): number {
    return this.top + this.halfHeight;
  }

  zoom(scale: number): Rect {
    scale = Math.min(scale, this.limit.width / this.width);
    scale = Math.min(scale, this.limit.height / this.height);
    this.left *= scale;
    this.top *= scale;
    this.width *= scale;
    this.height *= scale;
    return this;
  }

  zoomToMax(): Rect {
    return this.zoom(Number.MAX_VALUE);
  }

  zoomToWidth(width: number): Rect {
    return this.zoom(width / this.width);
  }

  zoomToHeight(height: number): Rect {
    return this.zoom(height / this.height);
  }

  moveX(deltaX: number): Rect {
    const left = this.left + deltaX;
    const minLeft = this.limit.left;
    const maxLeft = this.limit.right - this.width;
    this.left = Math.min(Math.max(left, minLeft), maxLeft);
    return this;
  }

  moveY(deltaY: number): Rect {
    const top = this.top + deltaY;
    const minTop = this.limit.top;
    const maxTop = this.limit.bottom - this.height;
    this.top = Math.min(Math.max(top, minTop), maxTop);
    return this;
  }

  move(deltaX: number, deltaY: number): Rect {
    this.moveX(deltaX);
    this.moveY(deltaY);
    return this;
  }

  moveTo(left: number, top: number): Rect {
    return this.move(left - this.left, top - this.top);
  }

  centerTo(x: number, y: number): Rect {
    return this.moveTo(x - this.halfWidth, y - this.halfHeight);
  }

  copyFrom(rect: Rect): this {
    this.left = rect.left;
    this.top = rect.top;
    this.width = rect.width;
    this.height = rect.height;
    return this;
  }

  static readonly InfinityRect = new Rect()
    .setLeft(-Number.MAX_VALUE / 2)
    .setTop(-Number.MAX_VALUE / 2)
    .setWidth(Number.MAX_VALUE)
    .setHeight(Number.MAX_VALUE);

  static from(left: number, top: number, width: number, height: number): Rect {
    return new Rect().setLeft(left).setTop(top).setWidth(width).setHeight(height);
  }

  static copyFrom(rect: Rect): Rect {
    return Rect.from(rect.left, rect.top, rect.width, rect.height);
  }

  static fromClientRect(rect: ClientRect, scrollX: number = 0, scrollY: number = 0): Rect {
    return Rect.from(rect.left, rect.top, rect.width, rect.height).move(scrollX, scrollY);
  }
}
