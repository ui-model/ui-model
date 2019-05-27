import { BaseModel } from '@ui-model/common';
import {
  addDays,
  addMonths,
  addWeeks,
  eachDay,
  endOfWeek,
  format,
  getISOWeek,
  getMonth,
  getYear,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from 'date-fns';

export class Calendar extends BaseModel {

  constructor() {
    super();
    this.update();
  }

  disabled = false;
  // TODO: 生成列表
  readonly weekdayNames = weekdaysMin();
  readonly monthNames = months();
  private _dates = [];

  get year(): number {
    return getYear(this.fakeValue);
  }

  set year(value: number) {
    if (this.disabled) {
      return;
    }
    if (value !== this.year) {
      this._value = setYear(this._value, value);
      this.update();
      this.changed();
    }
  }

  get month(): number {
    return getMonth(this.fakeValue);
  }

  set month(value: number) {
    if (this.disabled) {
      return;
    }
    if (value !== this.month) {
      this._value = setMonth(this._value, value);
      this.update();
      this.changed();
    }
  }

  private _minValue: Date;
  private _maxValue: Date;
  private _weeks = [];
  private _nearlyYears = [];

  private _value: Date;

  get value(): Date {
    return this._value;
  }

  set value(value: Date) {
    if (this.disabled) {
      return;
    }

    if (!isSameDay(value, this._value)) {
      this._value = value;
      this.update();
      this.changed();
    }
  }

  get minValue(): Date {
    return this._minValue;
  }

  set minValue(value: Date) {
    this._minValue = value;
  }

  private _fakeToday: Date;

  get maxValue(): Date {
    return this._maxValue;
  }

  set maxValue(value: Date) {
    this._maxValue = value;
  }

  get fakeToday(): Date {
    return this._fakeToday || new Date();
  }

  get weeks(): number[] {
    return this._weeks;
  }

  set fakeToday(value: Date) {
    this._fakeToday = value;
    this.update();
  }

  get nearlyYears(): number[] {
    return this._nearlyYears;
  }

  private get fakeValue(): Date {
    return this._value || this.fakeToday;
  }

  setFakeToday(value: Date): this {
    this.fakeToday = value;
    return this;
  }

  setValue(value: Date): this {
    this.value = value;
    return this;
  }

  clear(): void {
    this.value = undefined;
  }

  setYear(value: number): this {
    this.year = value;
    return this;
  }

  setMonth(value: number): this {
    this.month = value;
    return this;
  }

  isActive(date: Date): boolean {
    return this._value && isSameDay(this._value, date);
  }

  isToday(date: Date): boolean {
    return isSameDay(this.fakeToday, date);
  }

  isPast(date: Date): boolean {
    return this._value && isBefore(date, this._value);
  }

  isFuture(date: Date): boolean {
    return this._value && isAfter(date, this._value);
  }

  inSameMonth(date: Date): boolean {
    return isSameMonth(this.fakeValue, date);
  }

  isWeekEnd(date: Date): boolean {
    const weekday = date.getDay();
    return weekday === 0 || weekday === 6;
  }

  setMinValue(value: Date): this {
    this.minValue = value;
    return this;
  }

  setMaxValue(value: Date): this {
    this.maxValue = value;
    return this;
  }

  isValid(date: Date): boolean {
    return (!this._minValue || isSameDay(this._minValue, date) || isAfter(date, this._minValue)) &&
      (!this._maxValue || isSameDay(this._maxValue, date) || isBefore(date, this._maxValue));
  }

  goTo(date: Date): void {
    this.setValue(date);
  }

  goToToday(): void {
    this.goTo(new Date());
  }

  goToPrevMonth(step: number = 1): void {
    this.addMonth(-step);
  }

  goToNextMonth(step: number = 1): void {
    this.addMonth(step);
  }

  dates(week: number): Date[] {
    return this._dates[week - this.weeks[0]];
  }

  update(): void {
    const firstDayOfMonth = startOfMonth(this.fakeValue);
    const firstWeek = getISOWeek(firstDayOfMonth);
    const firstSunday = startOfWeek(firstDayOfMonth);

    this._weeks = range(firstWeek, firstWeek + 6);
    this._dates = this.weeks.map((week) => {
      return range(0, 7).map((day) => {
        return addDays(addWeeks(firstSunday, week - firstWeek), day);
      });
    });
    this._nearlyYears = range(this.year - 5, this.year + 6);
  }

  private addMonth(step: number): void {
    this.goTo(addMonths(this.fakeValue, step));
  }
}

function range(start: number, end: number): number[] {
  const result = [];
  for (let i = start; i < end; ++i) {
    result.push(i);
  }
  return result;
}

function weekdaysMin(): string[] {
  const now = new Date();
  return eachDay(startOfWeek(now), endOfWeek(now))
    .map((day) => format(day, 'dd'));
}

function months(): string[] {
  const now = new Date();
  const firstMonth = startOfYear(now);
  return range(0, 12).map(i => addMonths(firstMonth, i))
    .map(day => format(day, 'MMMM'));
}
