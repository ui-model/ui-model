import {Pie} from "../shape/pie";
export class PieChart {
  constructor(serials: number[] = [], radius: number, cx: number = 0, cy: number = 0) {
    this.serials = serials;
    this.radius = radius;
    this.cx = cx;
    this.cy = cy;
  }

  get serials(): number[] {
    return this._serials;
  }

  set serials(serials: number[]) {
    this._serials = serials;
    this._pies = this.buildPies(serials);
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
  private _serials: number[] = [];

  private buildPies(serials: number[]): Pie[] {
    const total = serials.reduce((result, current) => result + current, 0);
    const percents = serials.map((serial) => serial / total);
    const ranges: {begin: number, end: number}[] = [];
    let totalPercent = 0;
    percents.forEach((percent) => {
      ranges.push({
        begin: totalPercent,
        end: totalPercent + percent
      });
      totalPercent += percent;
    });
    return ranges.map((range) => new Pie(0, 0, 0, range.begin, range.end));
  }
}
