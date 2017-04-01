import {Component, OnInit} from '@angular/core';
import {scaleLinear} from 'd3';
import {lines} from '@ui-model/chart';

const xScale = scaleLinear().domain([0, 6]).range([0, 1000]);
const yScale = scaleLinear().domain([0, 10]).range([0, 1000]);

@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-line-chart.component.html',
  styleUrls: ['./d3-line-chart.component.scss']
})
export class D3LineChartComponent implements OnInit {

  constructor() {
  }

  points = lines([1, 5, 3, 10, 1, 0, 3].map((value, index) => ({
    x: xScale(index),
    y: yScale(value),
  })));

  ngOnInit(): void {
  }

}
