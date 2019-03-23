import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { GeoProjectionService } from '../services/geo-projection.service';

@Directive({
  selector: 'line[uiGeoLine]',
})
export class GeoLineDirective implements OnChanges {

  constructor(private projection: GeoProjectionService, private element: ElementRef, private renderer: Renderer2) {
  }
  @Input('uiGeoLine') geoLine: [[number, number], [number, number]];

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.geoLine) {
      return;
    }

    const [x1, y1] = this.projection.project(this.geoLine[0]);
    const [x2, y2] = this.projection.project(this.geoLine[1]);
    this.renderer.setAttribute(this.element.nativeElement, 'x1', x1.toString());
    this.renderer.setAttribute(this.element.nativeElement, 'y1', y1.toString());
    this.renderer.setAttribute(this.element.nativeElement, 'x2', x2.toString());
    this.renderer.setAttribute(this.element.nativeElement, 'y2', y2.toString());
  }
}
