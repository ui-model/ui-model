export class Distance {
  constructor(public x: number = 0, public y: number = 0) {
  }

  zoom(scale: number): void {
    this.x *= scale;
    this.y *= scale;
  }

  zoomToX(x: number): void {
    this.zoom(x / this.x);
  }

  zoomToY(y: number): void {
    this.zoom(y / this.y);
  }
}
