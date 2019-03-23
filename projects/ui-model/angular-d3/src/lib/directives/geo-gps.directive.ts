import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { isUndefined } from 'util';
import { GeoProjectionService } from '../services/geo-projection.service';

@Directive({
  selector: '[uiGeoGps]',
})
export class GeoGpsDirective implements OnChanges {

  constructor(private projection: GeoProjectionService, private element: ElementRef, private renderer: Renderer2) {

  }
  @Input('uiGeoGps') geoGps: [number, number];
  @Input() nameX = 'x';
  @Input() nameY = 'y';

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.geoGps || isUndefined(this.geoGps[0]) || isUndefined(this.geoGps[1]) || !this.nameX || !this.nameY) {
      return;
    }
    const [x, y] = this.projection.project(this.geoGps);
    this.renderer.setAttribute(this.element.nativeElement, this.nameX, x.toString());
    this.renderer.setAttribute(this.element.nativeElement, this.nameY, y.toString());
  }
}
