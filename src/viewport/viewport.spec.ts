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
});
