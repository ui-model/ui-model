import { BaseModel } from '@ui-model/core';
import { merge, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Pie } from '../shape/pie';

export class PieChart extends BaseModel {
  get changes(): Observable<this> {
    return merge(...this._pies.map(pie => pie.changes)).pipe(
      mapTo(this),
    );
  }

  get cx(): number {
    return this._pies && this._pies[0].cx || 0;
  }

  set cx(value: number) {
    if (value !== this.cx) {
      this._pies.forEach((pie) => pie.cx = value);
    }
  }

  get cy(): number {
    return this._pies && this._pies[0].cy || 0;
  }

  set cy(value: number) {
    if (value !== this.cy) {
      this._pies.forEach((pie) => pie.cy = value);
    }
  }

  get radius(): number {
    return this._pies && this._pies[0].radius || 0;
  }

  set radius(value: number) {
    if (value !== this.radius) {
      this._pies.forEach((pie) => pie.radius = value);
    }
  }

  private _pies: Pie[] = [];

  get pies(): Pie[] {
    return this._pies;
  }

  private _serials: number[] = [];

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

  setCx(value: number): this {
    this.cx = value;
    return this;
  }

  setCy(value: number): this {
    this.cy = value;
    return this;
  }

  setRadius(value: number): this {
    this.radius = value;
    return this;
  }

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
