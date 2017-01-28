import { expect } from 'chai';
import { Viewport } from './viewport';

const items: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
describe('Viewport', () => {
  it('constructor', () => {
    const viewport = new Viewport(items);
    expect(viewport.visibleCount).to.equal(5);
  });
  it('changes', (done) => {
    const viewport = new Viewport(items);
    viewport.changes.subscribe(() => {
      expect(viewport.visibleItems).to.eql([3, 4, 5, 6, 7]);
      done();
    });
    viewport.next(5);
  });

  it('initial visibleItems', () => {
    const viewport = new Viewport(items);
    expect(viewport.visibleItems).to.eql([0, 1, 2, 3, 4]);
  });
  it('head visibleItems', () => {
    const viewport = new Viewport(items);
    viewport.goTo(-2);
    expect(viewport.visibleItems).to.eql([0, 1, 2, 3, 4]);
  });
  it('middle visibleItems', () => {
    const viewport = new Viewport(items);
    viewport.goTo(3);
    expect(viewport.visibleItems).to.eql([1, 2, 3, 4, 5]);
  });
  it('tail visibleItems', () => {
    const viewport = new Viewport(items);
    viewport.goTo(8);
    expect(viewport.visibleItems).to.eql([5, 6, 7, 8, 9]);
  });
  it('prev & next', () => {
    const viewport = new Viewport(items);
    viewport.next(5);
    expect(viewport.visibleItems).to.eql([3, 4, 5, 6, 7]);
    viewport.prev(2);
    expect(viewport.visibleItems).to.eql([1, 2, 3, 4, 5]);
  });
  it('hasPrev & hasNext', () => {
    const viewport = new Viewport(items);
    expect(viewport.hasPrev).to.be.false;
    viewport.goTo(9);
    expect(viewport.hasNext).to.be.false;
  });
  it('hasPrev & hasNext: empty', () => {
    const viewport = new Viewport([]);
    expect(viewport.hasPrev).to.be.false;
    expect(viewport.hasNext).to.be.false;
  });

  it('hasPrevMore && hasFirst', () => {
    const viewport = new Viewport(items);
    viewport.goTo(0);
    expect(viewport.hasFirst).to.be.false;
    viewport.goTo(3);
    expect(viewport.hasFirst).to.be.true;
    viewport.goTo(4);
    expect(viewport.hasFirst).to.be.true;
  });
  it('hasNextMore && hasLast', () => {
    const viewport = new Viewport(items);
    viewport.goTo(9);
    expect(viewport.hasLast).to.be.false;
    viewport.goTo(7);
    expect(viewport.hasLast).to.be.false;
    viewport.goTo(6);
    expect(viewport.hasLast).to.be.true;
    viewport.goTo(5);
    expect(viewport.hasLast).to.be.true;
  });
});
