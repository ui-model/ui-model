export class Rect {
  constructor(public left: number = 0, public top: number = 0, public width: number = 0, public height: number = 0) {
  }

  static readonly InfinityRect: Rect = Object.freeze(new Rect(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE / 2, Number.MAX_VALUE / 2));

  limit: Rect = Rect.InfinityRect;

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
    const maxTop = this.limit.right - this.width;
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

  static fromClientRect(rect: ClientRect): Rect {
    return new Rect(rect.left, rect.top, rect.width, rect.height);
  }
}
