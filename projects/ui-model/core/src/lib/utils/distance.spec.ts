import { Distance } from './distance';

describe('Distance', () => {
  it('constructor', () => {
    const value = new Distance(10, 20);
    expect(value.x).toEqual(10);
    expect(value.y).toEqual(20);
  });
  it('zoom', () => {
    const value = new Distance(10, 20);
    value.zoom(2);
    expect(value.x).toEqual(20);
    expect(value.y).toEqual(40);
    value.zoomToX(15);
    expect(value.y).toEqual(30);
    value.zoomToY(40);
    expect(value.x).toEqual(20);
  });
});
