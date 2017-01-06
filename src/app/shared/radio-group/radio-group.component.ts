import {Component, OnInit, forwardRef, Input, OnDestroy} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {Select} from 'ui-model';

export const RADIO_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true,
};
@Component({
  selector: 'ua-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [RADIO_GROUP_VALUE_ACCESSOR]
})
export class RadioGroupComponent<T> implements ControlValueAccessor, OnInit, OnDestroy {

  @Input() options: T[];

  select: Select<T> = new Select<T>();

  sub;
  onChange: (_: any) => {};
  onTouched: () => {};

  constructor() {
  }

  ngOnInit() {
    this.sub = this.select.subscribe((selection) => {
      if (this.onChange) {
        this.onChange(selection);
      }
      if (this.onTouched) {
        this.onTouched();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  writeValue(value: T): void {
    this.select.select(value);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}
