import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectValueAccessor } from '@ui-model/angular';

@Component({
  selector: 'ui-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RadioGroupComponent,
    multi: true,
  }],
})
export class RadioGroupComponent<T> extends SelectValueAccessor<T> {
  randomId = `${new Date().getTime()}${Math.floor(Math.random() * 10000)}`;

  @Input() disabled: boolean;
  @Input() valueField: string;
  @Input() labelField: string;
  @Input() options: T[];

  idOf(option: T): string {
    return `checkbox-${this.randomId}-${option[this.valueField]}`;
  }
}
