import {expect} from 'chai';
import {Size} from './size';

describe('Size', () => {
  it('constructor', () => {
    const value = new Size(10, 20);
    expect(value.width).to.eql(10);
    expect(value.height).to.eql(20);
  });
  it('zoom', () => {
    const value = new Size(10, 20);
    value.zoom(2);
    expect(value.width).to.eql(20);
    expect(value.height).to.eql(40);
    value.zoomToWidth(15);
    expect(value.height).to.eql(30);
    value.zoomToHeight(40);
    expect(value.width).to.eql(20);
  });
});
