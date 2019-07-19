import { Rect } from './rect';

describe('Rect', () => {
  it('constructor', () => {
    const value = Rect.from(10, 20, 6, 8);
    expect(value.right).toEqual(16);
    expect(value.bottom).toEqual(28);
    expect(value.halfWidth).toEqual(3);
    expect(value.halfHeight).toEqual(4);
    expect(value.centerX).toEqual(13);
    expect(value.centerY).toEqual(24);
    expect(value.ratio).toEqual(0.75);

  });
  it('zoom', () => {
    const value = Rect.from(10, 20, 6, 8).limitTo(Rect.from(0, 0, 50, 50));
    value.zoom(2);
    expect(value.left).toEqual(20);
    expect(value.top).toEqual(40);
    expect(value.right).toEqual(32);
    expect(value.bottom).toEqual(56);
    value.zoom(10);
    expect(value.width).toEqual(37.5);
    expect(value.height).toEqual(50);
    value.zoom(0.1);
    value.zoomToMax();
    expect(value.width).toEqual(37.5);
    expect(value.height).toEqual(50);
    value.zoomToWidth(15);
    expect(value.right).toEqual(40);
    value.zoomToHeight(20);
    expect(value.bottom).toEqual(70);
  });
  it('move', () => {
    const value = Rect.from(10, 20, 6, 8).limitTo(Rect.from(0, 0, 50, 50));
    value.moveX(-100);
    expect(value.left).toEqual(0);
    value.moveX(100);
    expect(value.left).toEqual(44);
    value.moveY(-100);
    expect(value.top).toEqual(0);
    value.moveY(100);
    expect(value.top).toEqual(42);
    value.centerTo(30, 20);
    expect(value.centerX).toEqual(30);
    expect(value.centerY).toEqual(20);
    value.centerTo(0, 0);
    expect(value.centerX).toEqual(3);
    expect(value.centerY).toEqual(4);
  });
});
