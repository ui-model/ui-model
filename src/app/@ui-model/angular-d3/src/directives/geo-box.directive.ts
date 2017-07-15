import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { GeoProjectionService } from './geo-projection.service';
import { Rect } from '@ui-model/common';
import { FeatureCollection, GeometryObject } from 'geojson';
import { geoBounds } from 'd3-geo';
import * as _ from 'lodash';

@Directive({
  selector: 'svg[uiGeoBox]',
})
export class GeoBoxDirective implements OnChanges {
  constructor(private projection: GeoProjectionService, private element: ElementRef, private renderer: Renderer2) {
  }

  @Input('uiGeoBox') geoBox: FeatureCollection<GeometryObject>;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.geoBox) {
      return;
    }
    const values = _(this.geoBox.features)
      .flatMap((feature) => geoBounds(feature))
      .map((coordinate: [number, number]) => {
        return this.projection.project(coordinate);
      });
    const xList = values.map((xy) => xy[0]);
    const yList = values.map((xy) => xy[1]);
    const xMin = xList.min();
    const yMin = yList.min();
    const xMax = xList.max();
    const yMax = yList.max();
    const bounds = Rect.from(xMin, yMin, xMax - xMin, yMax - yMin);
    this.renderer.setAttribute(this.element.nativeElement, 'width', bounds.width.toString());
    this.renderer.setAttribute(this.element.nativeElement, 'height', bounds.height.toString());
    this.renderer.setAttribute(this.element.nativeElement, 'viewBox', `${bounds.left} ${bounds.top} ${bounds.width} ${bounds.height}`);
  }
}
