import { expect } from 'chai';
import { Viewport } from './viewport';

const items: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
describe('Viewport', () => {
  it('constructor', () => {
    const viewport = new Viewport(items);
    expect(viewport.viewport).to.equal(5);
  });
  it('changes', (done) => {
    const viewport = new Viewport(items);
    viewport.changes.subscribe(() => {
      expect(viewport.items).to.eql([3, 4, 5, 6, 7]);
      done();
    });
    viewport.next(5);
  });

  it('initial items', () => {
    const viewport = new Viewport(items);
    expect(viewport.items).to.eql([0, 1, 2, 3, 4]);
  });
  it('head items', () => {
    const viewport = new Viewport(items);
    viewport.goTo(-2);
    expect(viewport.items).to.eql([0, 1, 2, 3, 4]);
  });
  it('middle items', () => {
    const viewport = new Viewport(items);
    viewport.goTo(3);
    expect(viewport.items).to.eql([1, 2, 3, 4, 5]);
  });
  it('tail items', () => {
    const viewport = new Viewport(items);
    viewport.goTo(8);
    expect(viewport.items).to.eql([5, 6, 7, 8, 9]);
  });
  it('prev & next', () => {
    const viewport = new Viewport(items);
    viewport.next(5);
    expect(viewport.items).to.eql([3, 4, 5, 6, 7]);
    viewport.prev(2);
    expect(viewport.items).to.eql([1, 2, 3, 4, 5]);
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
    expect(viewport.hasPrevMore).to.be.false;
    expect(viewport.hasFirst).to.be.false;
    viewport.goTo(3);
    expect(viewport.hasPrevMore).to.be.false;
    expect(viewport.hasFirst).to.be.true;
    viewport.goTo(4);
    expect(viewport.hasPrevMore).to.be.true;
    expect(viewport.hasFirst).to.be.true;
  });
  it('hasNextMore && hasLast', () => {
    const viewport = new Viewport(items);
    viewport.goTo(9);
    expect(viewport.hasNextMore).to.be.false;
    expect(viewport.hasLast).to.be.false;
    viewport.goTo(7);
    expect(viewport.hasLast).to.be.false;
    viewport.goTo(6);
    expect(viewport.hasNextMore).to.be.false;
    expect(viewport.hasLast).to.be.true;
    viewport.goTo(5);
    expect(viewport.hasNextMore).to.be.true;
    expect(viewport.hasLast).to.be.true;
  });
});
