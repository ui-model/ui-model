import {Distance} from './distance';
export class Point {
  constructor(public x = 0, public y = 0) {
  }

  getDistanceTo(anotherPoint: Point): Distance {
    return new Distance(this.x - anotherPoint.x, this.y - anotherPoint.y);
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }
}
