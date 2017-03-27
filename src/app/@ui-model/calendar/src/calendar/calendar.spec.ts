import {Calendar} from './calendar';
import * as moment from 'moment';

describe('Calendar', () => {
  beforeEach(()=> {
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
    calendar.value = new Date('2017-01-31T00:00:00+0800');
    expect(calendar.value).toEqual(new Date('2017-01-31T00:00:00+0800'));
    calendar.year = 2016;
    expect(calendar.value).toEqual(new Date('2016-01-31T00:00:00+0800'));
    calendar.month = 2;
    expect(calendar.value).toEqual(new Date('2016-03-31T00:00:00+0800'));
    calendar.month = 3;
    expect(calendar.value).toEqual(new Date('2016-04-30T00:00:00+0800'));
    calendar.month = 1;
    expect(calendar.value).toEqual(new Date('2016-02-29T00:00:00+0800'));
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
      calendar.setMockValue('2017-01-10T00:00:00+0800');
      expect(calendar.inSameMonth('2017-01-01T00:00:00+0800')).toBeTruthy();
      expect(calendar.inSameMonth('2017-02-01T00:00:00+0800')).toBeFalsy();
    });
    it('years & months should be the same as today', () => {
      calendar.setMockValue('2013-01-10T00:00:00+0800');
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
    calendar.value = new Date('2017-02-13');
    expect(calendar.weeks).toEqual([5, 6, 7, 8, 9, 10]);
    expect(calendar.dates(5)).toEqual([
      new Date('2017-01-29T00:00:00+0800'),
      new Date('2017-01-30T00:00:00+0800'),
      new Date('2017-01-31T00:00:00+0800'),
      new Date('2017-02-01T00:00:00+0800'),
      new Date('2017-02-02T00:00:00+0800'),
      new Date('2017-02-03T00:00:00+0800'),
      new Date('2017-02-04T00:00:00+0800'),
    ]);
  });
  describe('states', () => {
    let calendar;
    beforeEach(() => {
      calendar = new Calendar().setValue(new Date('2017-02-16T00:00:00+0800'));
    });
    it('normal compare', () => {
      expect(calendar.isActive(new Date('2017-02-16T00:00:00+0800'))).toBeTruthy();
      expect(calendar.isActive(new Date('2017-03-16T00:00:00+0800'))).toBeFalsy();
      expect(calendar.isPast(new Date('2017-01-01'))).toBeTruthy();
      expect(calendar.isPast(new Date('2017-03-18'))).toBeFalsy();
      expect(calendar.isFuture(new Date('2017-01-01'))).toBeFalsy();
      expect(calendar.isFuture(new Date('2017-03-18'))).toBeTruthy();
    });
    it('when compare, we should ignore time fields', () => {
      expect(calendar.isActive(new Date('2017-02-16T00:30:00+0800'))).toBeTruthy();
    });
    it('weekend', () => {
      expect(calendar.isWeekEnd(new Date('2017-02-13'))).toBeFalsy();
      expect(calendar.isWeekEnd(new Date('2017-02-12'))).toBeTruthy();
      expect(calendar.isWeekEnd(new Date('2017-02-18'))).toBeTruthy();
    });
    it('same month', () => {
      expect(calendar.inSameMonth(new Date('2017-02-13'))).toBeTruthy();
      expect(calendar.inSameMonth(new Date('2017-01-31'))).toBeFalsy();
      expect(calendar.inSameMonth(new Date('2017-03-01'))).toBeFalsy();
    });
    it('is valid', () => {
      calendar.minValue = '2017-01-05';
      expect(calendar.isValid('2017-01-05')).toBeTruthy();
      expect(calendar.isValid('2017-01-04')).toBeFalsy();
      calendar.maxValue = '2017-01-10T00:00:00+0800';
      expect(calendar.isValid('2017-01-09')).toBeTruthy();
      expect(calendar.isValid('2017-01-10')).toBeTruthy();
      expect(calendar.isValid('2017-01-12')).toBeFalsy();
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
      expect(calendar.value).toEqual(new Date('2017-01-01T00:00:00+0800'));
    });
    it('prevMonth', () => {
      calendar.goToPrevMonth();
      expect(calendar.value).toEqual(new Date('2017-01-16T00:00:00+0800'));
    });
    it('nextMonth', () => {
      calendar.goToNextMonth();
      expect(calendar.value).toEqual(new Date('2017-03-16T00:00:00+0800'));
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
