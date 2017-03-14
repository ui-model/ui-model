import {Component, OnInit} from '@angular/core';
import 'moment/locale/zh-cn';
import {Metadata} from '../_common/meta-data';

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

  static meta = new Metadata()
    .setId('calendar')
    .setTitle('Calendar')
    .setTags(['calendar'])
    .setDescription('')
    .setAuthors(['wzc']);
}
