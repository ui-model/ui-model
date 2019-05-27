import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { geoPath } from 'd3-geo';
import { Feature, GeometryObject } from 'geojson';
import { GeoProjectionService } from '../services/geo-projection.service';

@Directive({
  selector: '[uiGeoPath]',
})
export class GeoPathDirective implements OnChanges {

  constructor(private projection: GeoProjectionService, private element: ElementRef<Element>, private renderer: Renderer2) {
  }

  @Input('uiGeoPath') geoPath: Feature<GeometryObject>;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.geoPath) {
      const path = geoPath().projection(this.projection.projection);
      this.renderer.setAttribute(this.element.nativeElement, 'd', path(this.geoPath));
    }
  }

}
