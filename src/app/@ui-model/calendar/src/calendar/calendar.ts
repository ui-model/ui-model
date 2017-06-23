import * as moment from 'moment';
import { Moment, MomentInput } from 'moment';
import { Stateful, StateListener } from '@ui-model/common';
import { isNullOrUndefined } from 'util';

export class Calendar extends Stateful {
  constructor(stateListener?: StateListener, stateKey?: string) {
    super(stateListener, stateKey);
    this.update();
  }

  private _value: Moment;

  private _fakeToday: Moment;

  get fakeToday(): Moment {
    return this._fakeToday || moment();
  }

  set fakeToday(value: Moment) {
    this._fakeToday = moment(value);
    this.update();
  }

  setFakeToday(value: MomentInput): this {
    this.fakeToday = moment(value);
    return this;
  }

  private get fakeValue(): Moment {
    return this._value || this.fakeToday;
  }

  get value(): Date {
    return this._value && this._value.toDate();
  }

  set value(value: Date) {
    if (!isSameDate(value, this._value)) {
      this._value = value && moment(value);
      this.update();
      this.changed();
    }
  }

  setValue(value: MomentInput): this {
    this.value = value && moment(value).toDate();
    return this;
  }

  clear(): void {
    this.value = undefined;
  }

  get year(): number {
    return this.fakeValue.year();
  }

  set year(value: number) {
    if (value !== this.year) {
      this._value.year(value);
      this.update();
      this.changed();
    }
  }

  setYear(value: number): this {
    this.year = value;
    return this;
  }

  get month(): number {
    return this.fakeValue.month();
  }

  set month(value: number) {
    if (value !== this.month) {
      this._value.month(value);
      this.update();
      this.changed();
    }
  }

  setMonth(value: number): this {
    this.month = value;
    return this;
  }

  isActive(date: MomentInput): boolean {
    return this._value && this._value.isSame(date, 'date');
  }

  isToday(date: MomentInput): boolean {
    return this.fakeToday.isSame(date, 'date');
  }

  isPast(date: MomentInput): boolean {
    return this._value && this._value.isAfter(date, 'date');
  }

  isFuture(date: MomentInput): boolean {
    return this._value && this._value.isBefore(date, 'date');
  }

  inSameMonth(date: MomentInput): boolean {
    return this.fakeValue.isSame(date, 'month');
  }

  isWeekEnd(date: Date): boolean {
    const weekday = date.getDay();
    return weekday === 0 || weekday === 6;
  }

  private _minValue: Moment;
  get minValue(): MomentInput {
    return this._minValue && this._minValue.toDate();
  }

  set minValue(value: MomentInput) {
    this._minValue = moment(value);
  }

  setMinValue(value: MomentInput): this {
    this.minValue = value;
    return this;
  }

  private _maxValue: Moment;

  get maxValue(): MomentInput {
    return this._maxValue && this._maxValue.toDate();
  }

  set maxValue(value: MomentInput) {
    this._maxValue = moment(value);
  }

  setMaxValue(value: MomentInput): this {
    this.maxValue = value;
    return this;
  }

  isValid(date: MomentInput): boolean {
    return (!this._minValue || this._minValue.isSameOrBefore(date, 'date')) &&
      (!this._maxValue || this._maxValue.isSameOrAfter(date, 'date'));
  }

  goTo(date: MomentInput): void {
    this.setValue(date);
  }

  goToToday(): void {
    this.goTo(new Date());
  }

  private addMonth(step: number): void {
    this.goTo(moment(this.fakeValue).add(step, 'month').toDate());
  }

  goToPrevMonth(step: number = 1): void {
    this.addMonth(-step);
  }

  goToNextMonth(step: number = 1): void {
    this.addMonth(step);
  }

  private _weeks = [];

  get weeks(): number[] {
    return this._weeks;
  }

  private _dates = [];

  dates(week: number): Date[] {
    return this._dates[week - this.weeks[0]];
  }

  readonly weekdayNames = moment.weekdaysMin(true);

  readonly monthNames = moment.months();

  private _nearlyYears = [];

  get nearlyYears(): number[] {
    return this._nearlyYears;
  }

  update(): void {
    const firstDayOfMonth = moment(this.fakeValue).startOf('month').local(true);
    const firstWeek = firstDayOfMonth.week();
    const firstSunday = moment(firstDayOfMonth).startOf('week').local(true);

    this._weeks = range(firstWeek, firstWeek + 6);
    this._dates = this.weeks.map((week) => {
      return range(0, 7).map((day) => {
        return moment(firstSunday).add(week - firstWeek, 'week').add(day, 'day').toDate();
      });
    });
    this._nearlyYears = range(this.year - 5, this.year + 6);
  }
}

function range(start: number, end: number): number[] {
  const result = [];
  for (let i = start; i < end; ++i) {
    result.push(i);
  }
  return result;
}

export function isSameDate(value1: MomentInput, value2: MomentInput): boolean {
  if (isNullOrUndefined(value1) && isNullOrUndefined(value2)) {
    return true;
  }

  if (isNullOrUndefined(value1)) {
    // always let first parameter is not null
    return isSameDate(value2, value1);
  }

  if (isNullOrUndefined(value2)) {
    return false;
  }

  return moment(value1).isSame(value2, 'date');
}
