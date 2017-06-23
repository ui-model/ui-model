import { Calendar } from './calendar';
import * as moment from 'moment';
import { isSameDate } from '@ui-model/calendar';

describe('Calendar', () => {
  beforeEach(() => {
    moment.locale('en');
  });

  it('constructor', () => {
    const calendar = new Calendar();
    calendar.setFakeToday(date('2013-01-10'));
    expect(calendar.weeks).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('isSameDate', () => {
    expect(isSameDate(undefined, undefined)).toBeTruthy();
    expect(isSameDate(undefined, new Date())).toBeFalsy();
    expect(isSameDate(new Date(), undefined)).toBeFalsy();
    expect(isSameDate('2017-08-01', '2017-08-02')).toBeFalsy();
    expect(isSameDate('2017-08-01', '2017-08-01')).toBeTruthy();
  });

  it('setValue', () => {
    const now = new Date();
    const c1 = new Calendar().setValue(now);
    expect(c1.value).toEqual(now);
    const c2 = new Calendar().setValue(now.getTime());
    expect(c2.value).toEqual(now);
    const c3 = new Calendar().setValue(now.toISOString());
    expect(c3.value).toEqual(now);
  });
  it('set value && year && month', () => {
    const calendar = new Calendar();
    calendar.value = date('2017-01-31');
    expect(calendar.value).toEqual(date('2017-01-31'));
    calendar.year = 2016;
    expect(calendar.value).toEqual(date('2016-01-31'));
    calendar.month = 2;
    expect(calendar.value).toEqual(date('2016-03-31'));
    calendar.month = 3;
    expect(calendar.value).toEqual(date('2016-04-30'));
    calendar.month = 1;
    expect(calendar.value).toEqual(date('2016-02-29'));
  });
  describe('nullable', () => {
    let calendar: Calendar;
    beforeEach(() => {
      calendar = new Calendar();
    });
    it('initial state', () => {
      expect(calendar.value).toBeUndefined();
    });
    it('today should be not active', () => {
      expect(calendar.isActive(new Date())).toBeFalsy();
    });
    it('can go to today', () => {
      const today = new Date();
      calendar.goTo(today);
      expect(calendar.isActive(today)).toBeTruthy();
    });
    it('states should be the same as today', () => {
      calendar.setFakeToday(date('2017-01-10'));
      expect(calendar.inSameMonth(date('2017-01-01'))).toBeTruthy();
      expect(calendar.inSameMonth(date('2017-02-01'))).toBeFalsy();
    });
    it('years & months should be the same as today', () => {
      calendar.setFakeToday(date('2013-01-10'));
      expect(calendar.nearlyYears).toEqual([
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
      ]);
      expect(calendar.monthNames).toEqual([
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]);
      expect(calendar.year).toEqual(2013);
      expect(calendar.month).toEqual(0);
    });
  });
  it('weeks && dates', () => {
    const calendar = new Calendar();
    calendar.value = date('2017-02-13');
    expect(calendar.weeks).toEqual([5, 6, 7, 8, 9, 10]);
    expect(calendar.dates(5)).toEqual([
      date('2017-01-29'),
      date('2017-01-30'),
      date('2017-01-31'),
      date('2017-02-01'),
      date('2017-02-02'),
      date('2017-02-03'),
      date('2017-02-04'),
    ]);
  });
  describe('states', () => {
    let calendar;
    beforeEach(() => {
      calendar = new Calendar().setValue(date('2017-02-16'));
      calendar.setFakeToday('2017-02-01');
    });
    it('normal compare', () => {
      expect(calendar.isActive(date('2017-02-16'))).toBeTruthy();
      expect(calendar.isActive(date('2017-03-16'))).toBeFalsy();
      expect(calendar.isPast(date('2017-01-01'))).toBeTruthy();
      expect(calendar.isPast(date('2017-03-18'))).toBeFalsy();
      expect(calendar.isFuture(date('2017-01-01'))).toBeFalsy();
      expect(calendar.isFuture(date('2017-03-18'))).toBeTruthy();
    });
    it('when compare, we should ignore time fields', () => {
      calendar.value = moment('2017-02-16').add(1, 'hours');
      expect(calendar.isActive(date('2017-02-16'))).toBeTruthy();
    });
    it('weekend', () => {
      expect(calendar.isWeekEnd(date('2017-02-13'))).toBeFalsy();
      expect(calendar.isWeekEnd(date('2017-02-12'))).toBeTruthy();
      expect(calendar.isWeekEnd(date('2017-02-18'))).toBeTruthy();
    });
    it('same month', () => {
      expect(calendar.inSameMonth(date('2017-02-13'))).toBeTruthy();
      expect(calendar.inSameMonth(date('2017-01-31'))).toBeFalsy();
      expect(calendar.inSameMonth(date('2017-03-01'))).toBeFalsy();
    });
    it('is valid', () => {
      calendar.minValue = date('2017-01-05');
      expect(calendar.isValid(date('2017-01-05'))).toBeTruthy();
      expect(calendar.isValid(date('2017-01-04'))).toBeFalsy();
      calendar.maxValue = date('2017-01-10');
      expect(calendar.isValid(date('2017-01-09'))).toBeTruthy();
      expect(calendar.isValid(date('2017-01-10'))).toBeTruthy();
      expect(calendar.isValid(date('2017-01-12'))).toBeFalsy();
    });
  });
  describe('navigation', () => {
    let calendar: Calendar;
    beforeEach(() => {
      calendar = new Calendar().setValue(date('2017-02-16'));
    });
    it('today', () => {
      calendar.goToToday();
      expect(calendar.isToday(new Date())).toBeTruthy();
    });
    it('goTo', () => {
      calendar.goTo(date('2017-01-01'));
      expect(calendar.value).toEqual(date('2017-01-01'));
    });
    it('prevMonth', () => {
      calendar.goToPrevMonth();
      expect(calendar.value).toEqual(date('2017-01-16'));
      expect(calendar.inSameMonth(date('2017-01-10'))).toBeTruthy();
    });
    it('nextMonth', () => {
      calendar.goToNextMonth();
      expect(calendar.value).toEqual(date('2017-03-16'));
      expect(calendar.inSameMonth(date('2017-03-10'))).toBeTruthy();
    });
  });
  describe('ui helper', () => {
    it('years && months && weekdays', () => {
      const calendar = new Calendar().setValue(date('2017-02-16'));
      expect(calendar.nearlyYears).toEqual([
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
      ]);
      expect(calendar.monthNames).toEqual([
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]);
      expect(calendar.weekdayNames).toEqual([
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa',
      ]);
    });
  });
});

function date(value: string): Date {
  return moment(value).local().toDate();
}
