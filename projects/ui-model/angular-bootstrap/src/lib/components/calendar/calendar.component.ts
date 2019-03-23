import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CalendarValueAccessor } from '@ui-model/angular';

@Component({
  selector: 'ui-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CalendarComponent,
    multi: true,
  }],

})
export class CalendarComponent extends CalendarValueAccessor {
  @Input() disabled: boolean;
  @Output() change = new EventEmitter<Date>();

  close(): void {
    this.change.emit(this.value);
  }
}
