import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CalendarValueAccessor } from '@ui-model/angular';

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
  inputs: ['disabled'],
})
export class CalendarComponent extends CalendarValueAccessor {
  @Output() change = new EventEmitter<Date>();

  close(): void {
    this.change.emit(this.value);
  }
}
