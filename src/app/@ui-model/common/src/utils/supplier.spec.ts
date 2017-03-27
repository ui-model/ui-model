import {expect} from 'chai';
import {getOrCall} from './supplier';

describe('Supplier', () => {
  it('getOrCall', () => {
    expect(getOrCall(1)).to.eql(1);
    expect(getOrCall(() => 1)).to.eql(1);
  });
});
