import {expect} from 'chai';
import {Distance} from './distance';

describe('Distance', () => {
  it('constructor', () => {
    const value = new Distance(10, 20);
    expect(value.x).to.eql(10);
    expect(value.y).to.eql(20);
  });
  it('zoom', () => {
    const value = new Distance(10, 20);
    value.zoom(2);
    expect(value.x).to.eql(20);
    expect(value.y).to.eql(40);
    value.zoomToX(15);
    expect(value.y).to.eql(30);
    value.zoomToY(40);
    expect(value.x).to.eql(20);
  });
});
