import { Injectable } from '@angular/core';
import { Point } from '@ui-model/common';
import { geoMercator, GeoProjection } from 'd3-geo';

@Injectable({ providedIn: 'root' })
export class GeoProjectionService {

  projection: GeoProjection = geoMercator().center([
    103,
    22,
  ]);

  project(position: [number, number]): [number, number] {
    return this.projection(position);
  }

  projectPoint(point: Point): Point {
    const d3pos = this.project([point.x, point.y]);
    return new Point(d3pos[0], d3pos[1]);
  }
}
