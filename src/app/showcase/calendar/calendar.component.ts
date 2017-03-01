import {Component, OnInit} from '@angular/core';
import 'moment/locale/zh-cn';

@Component({
  selector: 'ui-app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  value;

  constructor() {
  }

  ngOnInit() {
  }

}
