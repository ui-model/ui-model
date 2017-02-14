import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

type Moment = moment.Moment;
type MomentInput = moment.MomentInput;

export class Calendar {
  constructor(value?: MomentInput) {
    this.value = value;
  }

  private _changes: Subject<Date> = new Subject<Date>();

  protected changed(): void {
    this.update();
    this._changes.next(this._value.toDate());
  }

  get changes(): Observable<Date> {
    return this._changes;
  }

  private _value: Moment = moment();

  get value(): MomentInput {
    return this._value.toDate();
  }

  set value(value: MomentInput) {
    if (value !== this.value) {
      this._value = moment(value);
      this.changed();
    }
  }

  get year(): number {
    return this._value.year();
  }

  set year(value: number) {
    if (value !== this.year) {
      this._value.year(value);
      this.changed();
    }
  }

  get month(): number {
    return this._value.month();
  }

  set month(value: number) {
    if (value !== this.month) {
      this._value.month(value);
      this.changed();
    }
  }

  isActive(date: Date): boolean {
    return this._value.isSame(date, 'day');
  }

  isToday(date: Date): boolean {
    return moment(date).isSame(new Date(), 'day');
  }

  isPast(date: Date): boolean {
    return this._value.isAfter(date, 'day');
  }

  isFuture(date: Date): boolean {
    return this._value.isBefore(date, 'day');
  }

  inSameMonth(date: Date): boolean {
    return this._value.isSame(date, 'month');
  }

  isWeekEnd(date: Date): boolean {
    const weekday = date.getDay();
    return weekday === 0 || weekday === 6;
  }

  private _minValue: Moment;
  get minValue(): MomentInput {
    return this._minValue.toDate();
  }

  set minValue(value: MomentInput) {
    this._minValue = moment(value);
  }

  private _maxValue: Moment;

  get maxValue(): MomentInput {
    return this._maxValue.toDate();
  }

  set maxValue(value: MomentInput) {
    this._maxValue = moment(value);
  }

  isValid(date: MomentInput): boolean {
    if (this._minValue && this._minValue.isSameOrBefore(date, 'day')) {
      return true;
    }
    return !!(this._maxValue && this._maxValue.isSameOrAfter(date, 'day'));

  }

  goTo(date: Date): void {
    this.value = date;
  }

  goToToday(): void {
    this.goTo(new Date());
  }

  private addMonth(step: number): void {
    this.goTo(moment(this._value).add(step, 'month').toDate());
  }

  goToPrevMonth(step: number = 1): void {
    this.addMonth(-step);
  }

  goToNextMonth(step: number = 1): void {
    this.addMonth(step);
  }

  private _weeks: number[] = [];

  get weeks(): number[] {
    return this._weeks;
  }

  private _dates: Date[][] = [];

  dates(week: number): Date[] {
    return this._dates[week - this.weeks[0]];
  }

  readonly weekdays: string[] = moment.weekdaysMin(true);

  readonly months: string[] = moment.months();

  private _years: number[] = [];

  get years(): number[] {
    return this._years;
  }

  update(): void {
    const firstDayOfMonth = moment(this._value).startOf('month').local(true);
    const firstWeek = firstDayOfMonth.week();
    const firstSunday = moment(firstDayOfMonth).startOf('week').local(true);

    this._weeks = range(firstWeek, firstWeek + 6);
    this._dates = this.weeks.map((week) => {
      return range(0, 7).map((day) => {
        return moment(firstSunday).add(week - firstWeek, 'week').add(day, 'day').toDate();
      });
    });
    this._years = range(this.year - 5, this.year + 6);
  }
}

function range(start: number, end: number): number[] {
  const result = [];
  for (let i = start; i < end; ++i) {
    result.push(i);
  }
  return result;
}
