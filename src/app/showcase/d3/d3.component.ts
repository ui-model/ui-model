import {Component} from '@angular/core';
import {scaleBand, scaleLinear, schemeCategory10} from 'd3-scale';
import {max} from 'd3-array';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component {
  items = [
    100,
    200,
    150,
    400,
    100,
    200,
    150,
  ];

  colorOf(index: number): string {
    return schemeCategory10[index];
  }

  heightOf(item: number): number {
    const scale = scaleLinear().domain([0, max(this.items)]).range([0, 1000]);
    return scale(item);
  }

  offsetOf(index: number): number {
    const scale = scaleBand().domain(this.items.map((v, i) => i.toString())).paddingOuter(10).range([0, 1000]);
    return scale(index.toString());
  }
}
