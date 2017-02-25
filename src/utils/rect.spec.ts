import {expect} from 'chai';
import {Rect} from './rect';

describe('Rect', () => {
  it('constructor', () => {
    const value = new Rect(10, 20, 6, 8);
    expect(value.right).to.eql(16);
    expect(value.bottom).to.eql(28);
    expect(value.halfWidth).to.eql(3);
    expect(value.halfHeight).to.eql(4);
    expect(value.centerX).to.eql(13);
    expect(value.centerY).to.eql(24);
    expect(value.ratio).to.eql(0.75);

  });
  it('zoom', () => {
    const value = new Rect(10, 20, 6, 8).limitTo(new Rect(0, 0, 50, 50));
    value.zoom(2);
    expect(value.right).to.eql(22);
    expect(value.bottom).to.eql(36);
    value.zoom(10);
    expect(value.width).to.eql(37.5);
    expect(value.height).to.eql(50);
    value.zoom(0.1);
    value.zoomToMax();
    expect(value.width).to.eql(37.5);
    expect(value.height).to.eql(50);
    value.zoomToWidth(15);
    expect(value.right).to.eql(25);
    value.zoomToHeight(20);
    expect(value.bottom).to.eql(40);
  });
  it('move', () => {
    const value = new Rect(10, 20, 6, 8).limitTo(new Rect(0, 0, 50, 50));
    value.moveX(-100);
    expect(value.left).to.eql(0);
    value.moveX(100);
    expect(value.left).to.eql(44);
    value.moveY(-100);
    expect(value.top).to.eql(0);
    value.moveY(100);
    expect(value.top).to.eql(44);
    value.centerTo(30, 20);
    expect(value.centerX).to.eql(30);
    expect(value.centerY).to.eql(20);
    value.centerTo(0, 0);
    expect(value.centerX).to.eql(3);
    expect(value.centerY).to.eql(4);
  });
});
