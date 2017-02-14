import { Component, OnInit } from '@angular/core';
import {Calendar} from 'ui-model';

import 'moment/locale/zh-cn';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: Calendar = new Calendar('2017-02-03T00:00:00+08:00');

  constructor() { }

  ngOnInit() {
  }

}
