import { expect } from 'chai';
import { Calendar } from './calendar';

describe('Calendar', () => {
  it('constructor & value', () => {
    const calendar = new Calendar();
    calendar.value = new Date('2017-02-13');
    expect(calendar.weeks).to.eql([5, 6, 7, 8, 9, 10]);
    expect(calendar.dates(5)).to.eql([
      new Date('2017-01-29T00:00:00+08:00'),
      new Date('2017-01-30T00:00:00+08:00'),
      new Date('2017-01-31T00:00:00+08:00'),
      new Date('2017-02-01T00:00:00+08:00'),
      new Date('2017-02-02T00:00:00+08:00'),
      new Date('2017-02-03T00:00:00+08:00'),
      new Date('2017-02-04T00:00:00+08:00'),
    ]);
    calendar.year = 2016;
    expect(calendar.value).to.eql(new Date('2016-02-13'));
    calendar.month = 0;
    expect(calendar.value).to.eql(new Date('2016-01-13'));
  });
  describe('states', () => {
    let calendar;
    beforeEach(() => {
      calendar = new Calendar(new Date('2017-02-16T00:00:00+08:00'));
    });
    it('normal compare', () => {
      expect(calendar.isActive(new Date('2017-02-16T00:00:00+08:00'))).to.be.true;
      expect(calendar.isActive(new Date('2017-03-16T00:00:00+08:00'))).to.be.false;
      expect(calendar.isPast(new Date('2017-01-01'))).to.be.true;
      expect(calendar.isPast(new Date('2017-03-18'))).to.be.false;
      expect(calendar.isFuture(new Date('2017-01-01'))).to.be.false;
      expect(calendar.isFuture(new Date('2017-03-18'))).to.be.true;
    });
    it('when compare, we should ignore time fields', () => {
      expect(calendar.isActive(new Date('2017-02-16T00:30:00+08:00'))).to.be.true;
    });
    it('weekend', () => {
      expect(calendar.isWeekEnd(new Date('2017-02-13'))).to.be.false;
      expect(calendar.isWeekEnd(new Date('2017-02-12'))).to.be.true;
      expect(calendar.isWeekEnd(new Date('2017-02-18'))).to.be.true;
    });
    it('same month', () => {
      expect(calendar.inSameMonth(new Date('2017-02-13'))).to.be.true;
      expect(calendar.inSameMonth(new Date('2017-01-31'))).to.be.false;
      expect(calendar.inSameMonth(new Date('2017-03-01'))).to.be.false;
    });
    it('is valid', () => {
      calendar.minValue = '2017-01-05';
      expect(calendar.isValid('2017-01-05')).to.be.true;
      expect(calendar.isValid('2017-01-04')).to.be.false;
      calendar.maxValue = '2017-01-10T00:00:00+08:00';
      expect(calendar.isValid('2017-01-09')).to.be.true;
      expect(calendar.isValid('2017-01-10')).to.be.true;
    });
  });
  describe('navigations', () => {

  });
});
