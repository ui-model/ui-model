import * as moment from "moment";

type Moment = moment.Moment;
type MomentInput = moment.MomentInput;

const dow = moment.localeData().firstDayOfWeek();

export class Calendar {
  constructor(value?: MomentInput) {
    this.value = value;
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

  isPast(day: Date): boolean {
    return this._value.isBefore(day);
  }

  isFuture(date: Date): boolean {
    return this._value.isAfter(date);
  }

  inSameMonth(date: Date): boolean {
    return this._value.isSame(date, 'month');
  }

  isWeekEnd(date: Date): boolean {
    const weekday = date.getDay();
    return weekday === 0 || weekday === 6;
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

  prevMonth(step: number = 1): void {
    this.addMonth(-step);
  }

  nextMonth(step: number = 1): void {
    this.addMonth(step);
  }

  private _weeks: number[] = [];

  get weeks(): number[] {
    return this._weeks;
  }

  private _dates: Date[][] = [];

  dates(week: number): Date[] {
    return this._dates[week];
  }

  weekdays: ReadonlyArray<string> =  Object.freeze(moment.weekdaysMin(true));

  months: ReadonlyArray<string> = Object.freeze(moment.months());

  private _years: number[] = [];

  get years(): number[] {
    return this._years;
  }

  changed(): void {
    const firstDayOfMonth = moment(this._value).startOf('month').local(true);
    const firstWeek = firstDayOfMonth.week();
    const lastDayOfMonth = moment(this._value).endOf('month').local(true);

    const lastWeek = lastDayOfMonth.week();
    const firstSunday = moment(firstDayOfMonth).startOf('week').local(true);
    this._weeks = [];
    this._dates = [];
    for (let i = 0; i < 6; ++i) {
      const week = firstWeek + i;
      this._weeks.push(week);
      this._dates[week] = [];
      for (let j = 0; j < 7; ++j) {
        this._dates[week].push(moment(firstSunday).add(i, 'week').add(j, 'day').toDate());
      }
      Object.freeze(this._dates[i]);
    }
    Object.freeze(this._weeks);
    this._years = [];
    for(let i = -5; i < 5; ++i) {
      this._years.push(this.year + i);
    }
    Object.freeze(this._years);
  }
}
