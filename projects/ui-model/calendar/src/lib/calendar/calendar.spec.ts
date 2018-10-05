import { Calendar } from './calendar';
import { addHours, parse } from 'date-fns';

describe('Calendar', () => {
  beforeEach(() => {
  });

  it('constructor', () => {
    const calendar = new Calendar();
    calendar.setFakeToday(parse('2013-01-10'));
    expect(calendar.weeks).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('setValue', () => {
    const now = new Date();
    const calendar = new Calendar().setValue(now);
    expect(calendar.value).toEqual(now);
  });
  it('set value && year && month', () => {
    const calendar = new Calendar();
    calendar.value = parse('2017-01-31');
    expect(calendar.value).toEqual(parse('2017-01-31'));
    calendar.year = 2016;
    expect(calendar.value).toEqual(parse('2016-01-31'));
    calendar.month = 2;
    expect(calendar.value).toEqual(parse('2016-03-31'));
    calendar.month = 3;
    expect(calendar.value).toEqual(parse('2016-04-30'));
    calendar.month = 1;
    expect(calendar.value).toEqual(parse('2016-02-29'));
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
      calendar.setFakeToday(parse('2017-01-10'));
      expect(calendar.inSameMonth(parse('2017-01-01'))).toBeTruthy();
      expect(calendar.inSameMonth(parse('2017-02-01'))).toBeFalsy();
    });
    it('years & months should be the same as today', () => {
      calendar.setFakeToday(parse('2013-01-10'));
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
    calendar.value = parse('2017-02-13');
    expect(calendar.weeks).toEqual([5, 6, 7, 8, 9, 10]);
    expect(calendar.dates(5)).toEqual([
      parse('2017-01-29'),
      parse('2017-01-30'),
      parse('2017-01-31'),
      parse('2017-02-01'),
      parse('2017-02-02'),
      parse('2017-02-03'),
      parse('2017-02-04'),
    ]);
  });
  describe('states', () => {
    let calendar: Calendar;
    beforeEach(() => {
      calendar = new Calendar().setValue(parse('2017-02-16'));
      calendar.setFakeToday(parse('2017-02-01'));
    });
    it('normal compare', () => {
      expect(calendar.isActive(parse('2017-02-16'))).toBeTruthy();
      expect(calendar.isActive(parse('2017-03-16'))).toBeFalsy();
      expect(calendar.isPast(parse('2017-01-01'))).toBeTruthy();
      expect(calendar.isPast(parse('2017-03-18'))).toBeFalsy();
      expect(calendar.isFuture(parse('2017-01-01'))).toBeFalsy();
      expect(calendar.isFuture(parse('2017-03-18'))).toBeTruthy();
    });
    it('when compare, we should ignore time fields', () => {
      calendar.value = addHours(parse('2017-02-16'), 1);
      expect(calendar.isActive(parse('2017-02-16'))).toBeTruthy();
    });
    it('weekend', () => {
      expect(calendar.isWeekEnd(parse('2017-02-13'))).toBeFalsy();
      expect(calendar.isWeekEnd(parse('2017-02-12'))).toBeTruthy();
      expect(calendar.isWeekEnd(parse('2017-02-18'))).toBeTruthy();
    });
    it('same month', () => {
      expect(calendar.inSameMonth(parse('2017-02-13'))).toBeTruthy();
      expect(calendar.inSameMonth(parse('2017-01-31'))).toBeFalsy();
      expect(calendar.inSameMonth(parse('2017-03-01'))).toBeFalsy();
    });
    it('is valid', () => {
      calendar.minValue = parse('2017-01-05');
      expect(calendar.isValid(parse('2017-01-05'))).toBeTruthy();
      expect(calendar.isValid(parse('2017-01-04'))).toBeFalsy();
      calendar.maxValue = parse('2017-01-10');
      expect(calendar.isValid(parse('2017-01-09'))).toBeTruthy();
      expect(calendar.isValid(parse('2017-01-10'))).toBeTruthy();
      expect(calendar.isValid(parse('2017-01-12'))).toBeFalsy();
    });
  });
  describe('navigation', () => {
    let calendar: Calendar;
    beforeEach(() => {
      calendar = new Calendar().setValue(parse('2017-02-16'));
    });
    it('today', () => {
      calendar.goToToday();
      expect(calendar.isToday(new Date())).toBeTruthy();
    });
    it('goTo', () => {
      calendar.goTo(parse('2017-01-01'));
      expect(calendar.value).toEqual(parse('2017-01-01'));
    });
    it('prevMonth', () => {
      calendar.goToPrevMonth();
      expect(calendar.value).toEqual(parse('2017-01-16'));
      expect(calendar.inSameMonth(parse('2017-01-10'))).toBeTruthy();
    });
    it('nextMonth', () => {
      calendar.goToNextMonth();
      expect(calendar.value).toEqual(parse('2017-03-16'));
      expect(calendar.inSameMonth(parse('2017-03-10'))).toBeTruthy();
    });
  });
  describe('ui helper', () => {
    it('years && months && weekdays', () => {
      const calendar = new Calendar().setValue(parse('2017-02-16'));
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
