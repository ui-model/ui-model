import {Component, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR} from '@angular/forms';
import {SelectValueAccessor} from '@ui-model/angular';

const RADIO_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true,
};
@Component({
  selector: 'ui-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss'],
  inputs: ['disabled', 'valueField'],
  providers: [RADIO_GROUP_VALUE_ACCESSOR],
})
export class RadioGroupComponent<T> extends SelectValueAccessor<T> {
  @Input() options: T[];
}
