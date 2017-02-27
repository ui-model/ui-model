export class PieChart {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  arc: number;
  constructor(cx?, cy?, rx?, ry?, arc = 0.25) {
    this.cx = cx;
    this.cy = cy;
    this.rx = rx;
    this.ry = ry;
    this.arc = Math.PI * arc;
  }
  toPath():string {
    return `M ${this.cx - this.rx},${this.cy}
A ${this.rx} ${this.ry}, 0 0 0, ${this.cx} ${this.cy + this.ry}
L ${this.cx},${this.cy}`;
  }
}
