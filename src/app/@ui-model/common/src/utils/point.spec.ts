import {expect} from 'chai';
import {Point} from './point';

describe('Point', () => {
  it('constructor', () => {
    const value = new Point(10, 20);
    expect(value.x).to.eql(10);
    expect(value.y).to.eql(20);
  });
  it('move', () => {
    const value = new Point(10, 20);
    value.move(5, -10);
    expect(value.x).to.eql(15);
    expect(value.y).to.eql(10);
  });
  it('distance', () => {
    const value1 = new Point(10, 20);
    const value2 = new Point(20, 5);
    const distance = value2.getDistanceTo(value1);
    expect(distance.x).to.eql(10);
    expect(distance.y).to.eql(-15);
  });
});
