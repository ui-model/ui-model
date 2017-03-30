export class Size {
  constructor(public width: number = 0, public height: number = 0) {
  }

  zoom(scale: number): void {
    this.width *= scale;
    this.height *= scale;
  }

  zoomToWidth(width: number): void {
    this.zoom(width / this.width);
  }

  zoomToHeight(height: number): void {
    this.zoom(height / this.height);
  }
}
