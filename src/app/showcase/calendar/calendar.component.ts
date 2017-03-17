import {Component} from '@angular/core';
import 'moment/locale/zh-cn';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  value: Date;
}
