import {Component, OnDestroy, OnInit} from '@angular/core';
import {PieChart} from 'ui-model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'ui-app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy {

  chart = new PieChart(50, 50, 10, -0.25, 0.6);

  constructor() {
  }

  sub: Subscription;

  ngOnInit() {
    this.sub = this.chart.changes.subscribe((chart) => {
      console.log(chart);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
