import {Component, OnInit, OnDestroy, Input, Output, EventEmitter, forwardRef} from '@angular/core';
import {Toggle} from 'ui-model';
import {Subject, Subscription} from 'rxjs';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const TYPE_AHEAD_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TypeAheadComponent),
  multi: true,
};

@Component({
  selector: 'ui-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss'],
  providers: [TYPE_AHEAD_ACCESSOR],
})
export class TypeAheadComponent<T extends {name: string}> implements ControlValueAccessor, OnInit, OnDestroy {

  dropDown = new Toggle();

  checker = new Subject();

  @Input() items: T[];
  @Output() search = new EventEmitter<string>();

  constructor() {
  }

  sub: Subscription;

  ngOnInit() {
    this.sub = this.checker.asObservable()
      .skipWhile((term) => !term)
      .debounceTime(200)
      .do(() => {
        this.search.emit(this.term);
      })
      .subscribe(() => {
        this.dropDown.open();
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  term = '';
  _value: T;
  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
    this.term = value && value.name;
  }

  _change: (value: T) => void;
  _touched: () => void;

  protected changed(): void {
    if (this._change) {
      this._change(this.value);
    }
  }

  writeValue(value: T): void {
    this.value = value;
  }

  registerOnChange(fn: (value: T) => void): void {
    this._change = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._touched = fn;
  }

  select(item: T): void {
    this.value = item;
    this.changed();
  }

  clear(): void {
    this.select(undefined);
  }
}
