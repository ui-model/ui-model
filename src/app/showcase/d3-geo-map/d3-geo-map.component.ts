import { Component } from '@angular/core';
import { FeatureCollection, GeometryObject } from 'geojson';
import { provinces } from './data/china_provinces';
import * as _ from 'lodash';

const routes = [
  {
    from: 'bei_jing',
    to: 'xin_jiang',
    weight: 1,
  },
  {
    from: 'bei_jing',
    to: 'xi_zang',
    weight: 1,
  },
  {
    from: 'shang_hai',
    to: 'xi_zang',
    weight: 2,
  },
  {
    from: 'shang_hai',
    to: 'bei_jing',
    weight: 5,
  },
];

@Component({
  selector: 'app-d3-geo-map',
  templateUrl: './d3-geo-map.component.html',
  styleUrls: ['./d3-geo-map.component.scss'],
})
export class D3GeoMapComponent {
  map: FeatureCollection<GeometryObject> = provinces;
  routes = routes.map(({ from, to, weight }) => {
    const fromLoc = _.find(this.map.features, { id: from }).properties['cp'];
    const toLoc = _.find(this.map.features, { id: to }).properties['cp'];
    return {
      weight: weight,
      vector: [fromLoc, toLoc],
    };
  });
}
