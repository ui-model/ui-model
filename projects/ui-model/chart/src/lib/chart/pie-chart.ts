import { Stateful } from '@ui-model/common';
import { empty, Observable } from 'rxjs';
import { map, merge } from 'rxjs/operators';
import { Pie } from '../shape/pie';

export class PieChart extends Stateful {
  get serials(): number[] {
    return this._serials;
  }

  set serials(value: number[]) {
    this._serials = value;
    this._pies = this.buildPies(value);
  }

  setSerials(value: number[]): this {
    this.serials = value;
    return this;
  }

  get changes(): Observable<this> {
    return empty().pipe(
      merge(this._pies.map(pie => pie.changes)),
      map(() => this),
    );
  }

  get pies(): Pie[] {
    return this._pies;
  }

  get cx(): number {
    return this._pies && this._pies[0].cx || 0;
  }

  set cx(value: number) {
    if (value !== this.cx) {
      this._pies.forEach((pie) => pie.cx = value);
    }
  }

  setCx(value: number): this {
    this.cx = value;
    return this;
  }

  get cy(): number {
    return this._pies && this._pies[0].cy || 0;
  }

  set cy(value: number) {
    if (value !== this.cy) {
      this._pies.forEach((pie) => pie.cy = value);
    }
  }

  setCy(value: number): this {
    this.cy = value;
    return this;
  }

  get radius(): number {
    return this._pies && this._pies[0].radius || 0;
  }

  set radius(value: number) {
    if (value !== this.radius) {
      this._pies.forEach((pie) => pie.radius = value);
    }
  }

  setRadius(value: number): this {
    this.radius = value;
    return this;
  }

  private _pies: Pie[] = [];
  private _serials: number[] = [];

  private buildPies(serials: number[]): Pie[] {
    const total = serials.reduce((result, current) => result + current, 0);
    const percents = serials.map((serial) => serial / total);
    const ranges: { begin: number, end: number }[] = [];
    let totalPercent = 0;
    percents.forEach((percent) => {
      ranges.push({
        begin: totalPercent,
        end: totalPercent + percent,
      });
      totalPercent += percent;
    });
    return ranges.map((range) => new Pie().setRadius(0).setCx(0).setCy(0).setBeginPercent(range.begin).setEndPercent(range.end));
  }
}
