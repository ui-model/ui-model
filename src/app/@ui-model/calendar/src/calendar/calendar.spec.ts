import {Calendar} from './calendar';
import * as moment from 'moment';
import {ISO_8601} from 'moment';

describe('Calendar', () => {
  beforeEach(() => {
    moment.locale('en');
  });

  it('constructor', () => {
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
    calendar.value = moment('2017-01-31T00:00:00+0800', ISO_8601).toDate();
    expect(calendar.value).toEqual(moment('2017-01-31T00:00:00+0800', ISO_8601).toDate());
    calendar.year = 2016;
    expect(calendar.value).toEqual(moment('2016-01-31T00:00:00+0800', ISO_8601).toDate());
    calendar.month = 2;
    expect(calendar.value).toEqual(moment('2016-03-31T00:00:00+0800', ISO_8601).toDate());
    calendar.month = 3;
    expect(calendar.value).toEqual(moment('2016-04-30T00:00:00+0800', ISO_8601).toDate());
    calendar.month = 1;
    expect(calendar.value).toEqual(moment('2016-02-29T00:00:00+0800', ISO_8601).toDate());
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
      calendar.setMockValue(moment('2017-01-10T00:00:00+0800', ISO_8601));
      expect(calendar.inSameMonth(moment('2017-01-01T00:00:00+0800', ISO_8601))).toBeTruthy();
      expect(calendar.inSameMonth(moment('2017-02-01T00:00:00+0800', ISO_8601))).toBeFalsy();
    });
    it('years & months should be the same as today', () => {
      calendar.setMockValue(moment('2013-01-10T00:00:00+0800', ISO_8601));
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
    calendar.value = moment('2017-02-13', ISO_8601).toDate();
    expect(calendar.weeks).toEqual([5, 6, 7, 8, 9, 10]);
    expect(calendar.dates(5)).toEqual([
      moment('2017-01-29T00:00:00+0800', ISO_8601).toDate(),
      moment('2017-01-30T00:00:00+0800', ISO_8601).toDate(),
      moment('2017-01-31T00:00:00+0800', ISO_8601).toDate(),
      moment('2017-02-01T00:00:00+0800', ISO_8601).toDate(),
      moment('2017-02-02T00:00:00+0800', ISO_8601).toDate(),
      moment('2017-02-03T00:00:00+0800', ISO_8601).toDate(),
      moment('2017-02-04T00:00:00+0800', ISO_8601).toDate(),
    ]);
  });
  describe('states', () => {
    let calendar;
    beforeEach(() => {
      calendar = new Calendar().setValue(moment('2017-02-16T00:00:00+0800', ISO_8601).toDate());
    });
    it('normal compare', () => {
      expect(calendar.isActive(moment('2017-02-16T00:00:00+0800', ISO_8601).toDate())).toBeTruthy();
      expect(calendar.isActive(moment('2017-03-16T00:00:00+0800', ISO_8601).toDate())).toBeFalsy();
      expect(calendar.isPast(moment('2017-01-01T00:00:00Z', ISO_8601).toDate())).toBeTruthy();
      expect(calendar.isPast(moment('2017-03-18T00:00:00Z', ISO_8601).toDate())).toBeFalsy();
      expect(calendar.isFuture(moment('2017-01-01T00:00:00Z', ISO_8601).toDate())).toBeFalsy();
      expect(calendar.isFuture(moment('2017-03-18T00:00:00Z', ISO_8601).toDate())).toBeTruthy();
    });
    it('when compare, we should ignore time fields', () => {
      expect(calendar.isActive(moment('2017-02-16T00:30:00+0800', ISO_8601).toDate())).toBeTruthy();
    });
    it('weekend', () => {
      expect(calendar.isWeekEnd(moment('2017-02-13T00:00:00Z', ISO_8601).toDate())).toBeFalsy();
      expect(calendar.isWeekEnd(moment('2017-02-12T00:00:00Z', ISO_8601).toDate())).toBeTruthy();
      expect(calendar.isWeekEnd(moment('2017-02-18T00:00:00Z', ISO_8601).toDate())).toBeTruthy();
    });
    it('same month', () => {
      expect(calendar.inSameMonth(moment('2017-02-13T00:00:00Z', ISO_8601).toDate())).toBeTruthy();
      expect(calendar.inSameMonth(moment('2017-01-31T00:00:00Z', ISO_8601).toDate())).toBeFalsy();
      expect(calendar.inSameMonth(moment('2017-03-01T00:00:00Z', ISO_8601).toDate())).toBeFalsy();
    });
    it('is valid', () => {
      calendar.minValue = '2017-01-05';
      expect(calendar.isValid('2017-01-05T00:00:00Z')).toBeTruthy();
      expect(calendar.isValid('2017-01-04T00:00:00Z')).toBeFalsy();
      calendar.maxValue = '2017-01-10T00:00:00+0800';
      expect(calendar.isValid('2017-01-09T00:00:00Z')).toBeTruthy();
      expect(calendar.isValid('2017-01-10T00:00:00Z')).toBeTruthy();
      expect(calendar.isValid('2017-01-12T00:00:00Z')).toBeFalsy();
    });
  });
  describe('navigation', () => {
    let calendar;
    beforeEach(() => {
      calendar = new Calendar().setValue('2017-02-16T00:00:00+0800');
    });
    it('today', () => {
      calendar.goToToday();
      expect(calendar.isToday(new Date())).toBeTruthy();
    });
    it('goTo', () => {
      calendar.goTo('2017-01-01T00:00:00+0800');
      expect(calendar.value).toEqual(moment('2017-01-01T00:00:00+0800', ISO_8601).toDate());
    });
    it('prevMonth', () => {
      calendar.goToPrevMonth();
      expect(calendar.value).toEqual(moment('2017-01-16T00:00:00+0800', ISO_8601).toDate());
    });
    it('nextMonth', () => {
      calendar.goToNextMonth();
      expect(calendar.value).toEqual(moment('2017-03-16T00:00:00+0800', ISO_8601).toDate());
    });
  });
  describe('ui helper', () => {
    it('years && months && weekdays', () => {
      const calendar = new Calendar().setValue('2017-02-16T00:00:00+0800');
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
