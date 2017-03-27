import {Pager} from './pager';

describe('Pager', () => {
  it('constructor:default', () => {
    const pager = new Pager();
    expect(pager.index).toEqual(0);
    expect(pager.indexMax).toEqual(-1);
    expect(pager.begin).toEqual(0);
    expect(pager.end).toEqual(0);
    expect(pager.count).toEqual(0);
  });
  it('changes', (done) => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;
    pager.changes.subscribe((value) => {
      expect(value.index).toEqual(5);
      done();
    });
    pager.goTo(5);
  });
  it('constructor: normal', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;
    expect(pager.index).toEqual(0);
    expect(pager.indexMax).toEqual(100);
    expect(pager.begin).toEqual(0);
    expect(pager.end).toEqual(10);
    expect(pager.count).toEqual(101);
  });
  it('constructor: less than one page', () => {
    const pager = new Pager().setSize(20);
    pager.totalItems = 10;
    expect(pager.count).toEqual(1);
    expect(pager.isFirst).toBeTruthy();
    expect(pager.isLast).toBeTruthy();
  });
  it('navigation', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;

    pager.goTo(10);
    expect(pager.offset).toEqual(100);

    pager.next();
    expect(pager.isActive(11)).toBeTruthy();
    expect(pager.offset).toEqual(110);

    pager.prev();
    expect(pager.offset).toEqual(100);

    pager.goToFirst();
    expect(pager.offset).toEqual(0);

    pager.goToLast();
    expect(pager.offset).toEqual(1000);
  });

  it('navigation: out of bounds', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1000;

    pager.goTo(-1);
    expect(pager.index).toEqual(0);

    pager.goTo(101);
    expect(pager.index).toEqual(99);
  });

  it('modify recordCount should change pageCount and keep page', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;
    pager.goTo(90);
    pager.totalItems = 21;
    expect(pager.count).toEqual(3);
    expect(pager.index).toEqual(2);
  });
  it('modify pageSize should keep offset', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1000;

    pager.goTo(10);
    expect(pager.offset).toEqual(100);
    pager.size = 20;
    expect(pager.offset).toEqual(100);
    expect(pager.index).toEqual(5);
    pager.size = 23;
    expect(pager.index).toEqual(4);
    expect(pager.offset).toEqual(92);
  });
  it('states', () => {
    const pager = new Pager().setSize(10);
    pager.totalItems = 1001;

    pager.goTo(0);
    expect(pager.isFirst).toBeTruthy();
    expect(pager.isLast).toBeFalsy();
    expect(pager.hasPrev).toBeFalsy();
    expect(pager.hasNext).toBeTruthy();
  });
  it('required', () => {
    const pager = new Pager().setSize(10);
    expect(pager.required).toBeFalsy();
    pager.totalItems = 10;
    expect(pager.required).toBeFalsy();
    pager.totalItems = 11;
    expect(pager.required).toBeTruthy();
  });
});
