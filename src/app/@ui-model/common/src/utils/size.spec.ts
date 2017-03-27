import {Size} from './size';

describe('Size', () => {
  it('constructor', () => {
    const value = new Size(10, 20);
    expect(value.width).toEqual(10);
    expect(value.height).toEqual(20);
  });
  it('zoom', () => {
    const value = new Size(10, 20);
    value.zoom(2);
    expect(value.width).toEqual(20);
    expect(value.height).toEqual(40);
    value.zoomToWidth(15);
    expect(value.height).toEqual(30);
    value.zoomToHeight(40);
    expect(value.width).toEqual(20);
  });
});
