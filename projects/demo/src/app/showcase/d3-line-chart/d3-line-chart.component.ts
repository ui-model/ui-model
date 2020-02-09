import { Component } from '@angular/core';
import { Line, lines } from '@ui-model/chart';
import { Point } from '@ui-model/core';
import { scaleLinear } from 'd3';

@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-line-chart.component.html',
  styleUrls: ['./d3-line-chart.component.scss'],
})
export class D3LineChartComponent {
  xScale = scaleLinear().domain([0, 6]).range([0, 1000]);
  yScale = scaleLinear().domain([0, 10]).range([0, 1000]);

  lines: Line[] = lines([1, 5, 3, 10, 1, 0, 3].map((value, index) => new Point(this.xScale(index), this.yScale(value))));
}
