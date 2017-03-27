import {Component, OnInit, forwardRef} from '@angular/core';
import {CalendarValueAccessor} from '@ui-model/angular';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

const CALENDAR_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarComponent),
  multi: true,
};
@Component({
  selector: 'ui-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
  providers: [CALENDAR_VALUE_ACCESSOR],
})
export class CalendarComponent extends CalendarValueAccessor implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
