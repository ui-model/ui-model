import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { isFunction, Supplier, Transformer } from '@ui-model/common';
import { Toggle } from '@ui-model/core';
import { debounceTime, skipWhile, tap } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'ui-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TypeAheadComponent,
    multi: true,
  }],
})
export class TypeAheadComponent<T extends { format?: Supplier<SafeHtml>, parse?: Supplier<string> }>
  implements ControlValueAccessor, OnInit, OnDestroy {

  dropDown = new Toggle();

  checker = new Subject();

  @Input() items: T[];
  @Input() displayField = 'name';
  @Input() placeholder = '-';
  @Input() formatter: Transformer<any, SafeHtml> = this.defaultFormatter.bind(this);
  @Input() parser: Transformer<any, string> = this.defaultParser.bind(this);
  @Output() search = new EventEmitter<string>();

  activeIndex = 0;
  sub: Subscription;
  term = '';
  _change: (value: T) => void;
  _touched: () => void;
  @Input() disabled = false;

  _value: T;

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
    this.term = value && this.parser(value);
  }

  defaultFormatter(value: T): string | SafeHtml {
    if (!value) {
      return '';
    }

    if (value.hasOwnProperty('format') && isFunction(value.format)) {
      return value.format();
    } else {
      return value[this.displayField];
    }
  }

  defaultParser(value: T): string {
    if (!value) {
      return '';
    }
    if (value.hasOwnProperty('parse') && isFunction(value.format)) {
      return value.parse();
    } else {
      return value[this.displayField];
    }
  }

  ngOnInit(): void {
    this.sub = this.checker.asObservable().pipe(
      skipWhile((term) => !term),
      debounceTime(200),
      tap(() => {
        this.search.emit(this.term);
      }),
    ).subscribe(() => {
      this.dropDown.open();
    });
  }

  ngOnDestroy(): void {
    this.checker.complete();
    this.sub.unsubscribe();
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

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  select(item: T): void {
    this.value = item;
    this.changed();
  }

  clear(): void {
    this.select(undefined);
  }

  keydown($event: KeyboardEvent): void {
    if (['ArrowUp', 'ArrowDown', 'Home', 'End'].indexOf($event.key) !== -1) {
      $event.preventDefault();
      $event.stopPropagation();
    }
  }

  keyup($event: KeyboardEvent): void {
    const count = this.items.length;
    switch ($event.key) {
      case 'ArrowDown':
        this.activeIndex = (this.activeIndex + 1) % count;
        break;
      case 'ArrowUp':
        this.activeIndex = (this.activeIndex + count - 1) % count;
        break;
      case 'Home':
        this.activeIndex = 0;
        break;
      case 'End':
        this.activeIndex = count - 1;
        break;
      default:
        return;
    }
    $event.preventDefault();
    $event.stopPropagation();
  }

  keypress($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      this.select(this.items[this.activeIndex]);
      this.dropDown.close();
      $event.preventDefault();
      $event.stopPropagation();
    }
  }

  protected changed(): void {
    if (this._change) {
      this._change(this.value);
    }
  }
}
