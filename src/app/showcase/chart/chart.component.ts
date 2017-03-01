import {Component, OnInit} from '@angular/core';
import {PieChart} from '../../_libs/ui-model/src/chart/pie-chart';

@Component({
  selector: 'ui-app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart = new PieChart(125, 80, 45, 45, 0);

  constructor() {
  }

  ngOnInit() {
  }

}
