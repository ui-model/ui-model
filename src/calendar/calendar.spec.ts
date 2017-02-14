import { expect } from 'chai';
import { Calendar } from './calendar';
import * as moment from 'moment';

describe('Calendar', () => {
  it('constructor', () => {
    const calendar = new Calendar();
    calendar.value = moment('2017-02-13').toDate();
    expect(calendar.weeks).to.eql([5, 6, 7, 8, 9, 10]);
    expect(calendar.dates(5)).to.eql([
      moment('2017-01-29T00:00:00+08:00').toDate(),
      moment('2017-01-30T00:00:00+08:00').toDate(),
      moment('2017-01-31T00:00:00+08:00').toDate(),
      moment('2017-02-01T00:00:00+08:00').toDate(),
      moment('2017-02-02T00:00:00+08:00').toDate(),
      moment('2017-02-03T00:00:00+08:00').toDate(),
      moment('2017-02-04T00:00:00+08:00').toDate(),
    ]);
  });
  it('states', () => {
    const calendar = new Calendar();

    const today = moment('2017-02-16T00:00:00+08:00').toDate();
    calendar.value = today;
    expect(calendar.isActive(today)).to.be.true;
    expect(calendar.isActive(moment('2017-03-16T00:00:00+08:00').toDate())).to.be.false;
    calendar.value = moment();
    expect(calendar.isToday(moment().toDate())).to.be.true;
  });
  it('date', () => {
    const time = moment('2017-02-16T00:00:00+08:00').toDate();
    expect(time.getDate()).to.eql(16);
    expect(time.getHours()).to.eql(0);
  });
});
