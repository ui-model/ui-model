import { Coordinate, Stateful } from '@ui-model/common';
import { Observable } from 'rxjs/Observable';
import { map, merge } from 'rxjs/operators';

export class Pie extends Stateful {
  get changes(): Observable<this> {
    return this._begin.changes.pipe(
      merge(this._end.changes),
      map(() => this),
    );
  }

  get cx(): number {
    return this._begin.cx;
  }

  set cx(value: number) {
    if (this._begin.cx !== value) {
      this._begin.setCx(value);
      this._end.setCx(value);
    }
  }

  setCx(value: number): this {
    this.cx = value;
    return this;
  }

  get cy(): number {
    return this._begin.cy;
  }

  set cy(value: number) {
    if (this._begin.cy !== value) {
      this._begin.setCy(value);
      this._end.setCy(value);
    }
  }

  setCy(value: number): this {
    this.cy = value;
    return this;
  }

  get radius(): number {
    return this._begin.radius;
  }

  set radius(value: number) {
    if (this._begin.radius !== value) {
      this._begin.setRadius(value);
      this._end.setRadius(value);
    }
  }

  setRadius(value: number): this {
    this.radius = value;
    return this;
  }

  get beginPercent(): number {
    return this._begin.percent;
  }

  set beginPercent(value: number) {
    this._begin.setPercent(value);
  }

  setBeginPercent(value: number): this {
    this.beginPercent = value;
    return this;
  }

  get endPercent(): number {
    return this._end.percent;
  }

  set endPercent(value: number) {
    this._end.setPercent(value);
  }

  setEndPercent(value: number): this {
    this.endPercent = value;
    return this;
  }

  get middlePercent(): number {
    return this.beginPercent + (this.endPercent - this.beginPercent) / 2;
  }

  mapToXY(percent: number, radius: number): { x: number, y: number } {
    const coordinate = new Coordinate();
    coordinate.cx = this.cx;
    coordinate.cy = this.cy;
    coordinate.percent = percent;
    coordinate.radius = radius;
    return {x: coordinate.x, y: coordinate.y};
  }

  private _begin: Coordinate = new Coordinate();
  private _end: Coordinate = new Coordinate();

  get largeArc(): number {
    if ((this._begin.percent - 0.5) > this._end.percent) {
      return 1;
    } else if ((this._begin.percent + 0.5) > this._end.percent) {
      return 0;
    } else {
      return 1;
    }
  }

  get sweepFlag(): number {
    if (this.beginPercent > this.endPercent) {
      return 0;
    } else {
      return 1;
    }
  }

  get path(): string {
    // Full Arc
    if (this.endPercent >= this.beginPercent + 1 || this.beginPercent > this.endPercent + 1) {
      return `M ${this.cx + this.radius} ${this.cy}
A ${this.radius} ${this.radius}, 0 1 0, ${this.cx + this.radius} ${this.cy + 0.001}
Z`;
    } else {
      return `M ${this._begin.x},${this._begin.y}
A ${this.radius} ${this.radius}, 0 ${this.largeArc} ${this.sweepFlag}, ${this._end.x} ${this._end.y}
L ${this._begin.cx},${this._begin.cy}Z`;
    }
  }
}
