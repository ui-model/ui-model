import { Injectable } from '@angular/core';
import { Point } from '@ui-model/common';
import { geoMercator } from 'd3-geo';

@Injectable()
export class GeoProjectionService {

  projection = geoMercator().center([
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
