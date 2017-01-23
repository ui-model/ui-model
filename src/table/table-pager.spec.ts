import {expect} from 'chai';
import { TablePager } from './table-pager';

describe('TablePager', ()=> {
  it('constructor:default', () => {
    const pager = new TablePager();
    expect(pager.page).to.equal(0);
    expect(pager.lastIndex).to.equal(-1);
    expect(pager.offset).to.equal(0);
    expect(pager.offsetNext).to.equal(0);
    expect(pager.pageCount).to.equal(0);
  });
  it('changes', (done) => {
    const pager = new TablePager(1001, 10);
    pager.changes.subscribe((value)=> {
      expect(value.page).to.equal(5);
      done();
    });
    pager.goTo(5);
  });
  it('constructor: normal', () => {
    const pager = new TablePager(1001, 10);
    expect(pager.page).to.equal(0);
    expect(pager.lastIndex).to.equal(1000);
    expect(pager.offset).to.equal(0);
    expect(pager.offsetNext).to.equal(10);
    expect(pager.lowBound).to.equal(0);
    expect(pager.highBound).to.equal(10);
    expect(pager.pageCount).to.equal(101);
  });
  it('constructor: less than one page', () => {
    const pager = new TablePager(10, 20);
    expect(pager.pageCount).to.equal(1);
    expect(pager.isFirst).to.be.true;
    expect(pager.isLast).to.be.true;
  });
  it('navigation', () => {
    const pager = new TablePager(1001, 10);
    pager.goTo(10);
    expect(pager.offset).to.equal(100);

    pager.next();
    expect(pager.isActive(11)).to.be.true;
    expect(pager.offset).to.equal(110);

    pager.prev();
    expect(pager.offset).to.equal(100);
  });

  it('navigation: out of bounds', () => {
    const pager = new TablePager(1000, 10);
    pager.goTo(-1);
    expect(pager.page).to.equal(0);

    pager.goTo(101);
    expect(pager.page).to.equal(99);
  });

  it('modify recordCount should change pageCount and keep page', () => {
    const pager = new TablePager(1001, 10);
    pager.goTo(90);
    pager.recordCount = 21;
    expect(pager.pageCount).to.equal(3);
    expect(pager.page).to.equal(2);
  });
  it('modify pageSize should keep offset', () => {
    const pager = new TablePager(1000, 10);
    pager.goTo(10);
    expect(pager.offset).to.equal(100);
    pager.pageSize = 20;
    expect(pager.offset).to.equal(100);
    expect(pager.page).to.equal(5);
    pager.pageSize = 23;
    expect(pager.page).to.equal(4);
    expect(pager.offset).to.equal(92);
  });
  it('states', () => {
    const pager = new TablePager(1001, 10);
    pager.goTo(0);
    expect(pager.isFirst).to.be.true;
    expect(pager.isLast).to.be.false;
    expect(pager.hasPrev).to.be.false;
    expect(pager.hasNext).to.be.true;
  });
});
