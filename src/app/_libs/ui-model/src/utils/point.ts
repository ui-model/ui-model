import {Distance} from "./distance";
export class Point {
  constructor(public x: number = 0, public y: number = 0) {
  }

  getDistanceTo(anotherPoint: Point): Distance {
    return new Distance(this.x - anotherPoint.x, this.y - anotherPoint.y);
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }
}
