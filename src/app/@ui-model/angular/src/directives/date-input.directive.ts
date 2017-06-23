import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { isNullOrUndefined } from 'util';
import * as moment from 'moment';
import { Moment, MomentInput } from 'moment';
import { isDate } from '../validators/is-date.validator';

// tslint:disable:directive-selector
@Directive({
  selector: 'input[type=date],[uiDateInput]',
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: DateInputDirective},
    {provide: NG_VALIDATORS, multi: true, useExisting: DateInputDirective},
  ],
})
export class DateInputDirective implements ControlValueAccessor, Validator {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  get element(): Element {
    return this.elementRef.nativeElement;
  }

  validate(c: AbstractControl): ValidationErrors | any {
    return isDate(c);
  }

  writeValue(obj: MomentInput): void {
    const date = moment(obj);
    this.renderer.setProperty(this.element, 'value', date.format('YYYY-MM-DD'));
  }

  private onChange: (value: Date) => void;

  @HostListener('change', ['$event.target'])
  change(input: HTMLInputElement): void {
    if (input.type === 'date') {
      this.changed(input.value);
    }
  }

  @HostListener('blur', ['$event.target'])
  blur(input: HTMLInputElement): void {
    this.changed(input.value);
    this.touched();
  }

  protected changed(value: string): void {
    const date = parseDate(value);
    if (this.onChange) {
      this.onChange(date && date.toDate());
    }
  }

  registerOnChange(fn: (value: Date) => void): void {
    this.onChange = fn;
  }

  private onTouched: () => void;

  protected touched(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(this.element, 'disabled', isDisabled);
  }
}

function parseDate(value: string): Moment {
  if (isNullOrUndefined(value) || value === '') {
    return;
  }
  return moment(value);
}
