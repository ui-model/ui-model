import {expect} from 'chai';
import {Pager} from './pager';

describe('Pager', () => {
  it('constructor:default', () => {
    const pager = new Pager();
    expect(pager.index).to.equal(0);
    expect(pager.indexMax).to.equal(-1);
    expect(pager.begin).to.equal(0);
    expect(pager.end).to.equal(0);
    expect(pager.count).to.equal(0);
  });
  it('changes', (done) => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;
    pager.changes.subscribe((value) => {
      expect(value.index).to.equal(5);
      done();
    });
    pager.goTo(5);
  });
  it('constructor: normal', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;
    expect(pager.index).to.equal(0);
    expect(pager.indexMax).to.equal(100);
    expect(pager.begin).to.equal(0);
    expect(pager.end).to.equal(10);
    expect(pager.count).to.equal(101);
  });
  it('constructor: less than one page', () => {
    const pager = new Pager().setSize(20);
    pager.totalItems = 10;
    expect(pager.count).to.equal(1);
    expect(pager.isFirst).to.be.true;
    expect(pager.isLast).to.be.true;
  });
  it('navigation', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;

    pager.goTo(10);
    expect(pager.offset).to.equal(100);

    pager.next();
    expect(pager.isActive(11)).to.be.true;
    expect(pager.offset).to.equal(110);

    pager.prev();
    expect(pager.offset).to.equal(100);

    pager.goToFirst();
    expect(pager.offset).to.equal(0);

    pager.goToLast();
    expect(pager.offset).to.equal(1000);
  });

  it('navigation: out of bounds', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1000;

    pager.goTo(-1);
    expect(pager.index).to.equal(0);

    pager.goTo(101);
    expect(pager.index).to.equal(99);
  });

  it('modify recordCount should change pageCount and keep page', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;
    pager.goTo(90);
    pager.totalItems = 21;
    expect(pager.count).to.equal(3);
    expect(pager.index).to.equal(2);
  });
  it('modify pageSize should keep offset', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1000;

    pager.goTo(10);
    expect(pager.offset).to.equal(100);
    pager.size = 20;
    expect(pager.offset).to.equal(100);
    expect(pager.index).to.equal(5);
    pager.size = 23;
    expect(pager.index).to.equal(4);
    expect(pager.offset).to.equal(92);
  });
  it('states', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;

    pager.goTo(0);
    expect(pager.isFirst).to.be.true;
    expect(pager.isLast).to.be.false;
    expect(pager.hasPrev).to.be.false;
    expect(pager.hasNext).to.be.true;
  });
  it('required', () => {
    const pager = new Pager().setSize(10);
    expect(pager.required).to.be.false;
    pager.totalItems = 10;
    expect(pager.required).to.be.false;
    pager.totalItems = 11;
    expect(pager.required).to.be.true;
  });
});
