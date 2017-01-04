import {Select} from './select';
import {expect} from 'chai';
import {Supplier, Suppliers} from '../utils/supplier';

describe('Select', () => {
  it('select', () => {
    const select = new Select();
    select.select(1);
    expect(select.selected(1)).to.be.ok;
    expect(select.selected(2)).to.not.be.ok;
  });
  it('selection', () => {
    const select = new Select();
    select.select(1);
    expect(select.selection).to.equal(1);
  });
  it('if use identity supplier, we cant lookup object properly', () => {
    const select = new Select(Suppliers.identity);
    select.select({a: 1});
    expect(select.selected({a: 1})).to.not.be.ok;
  });
  it('when using object supplier, we can lookup object properly', () => {
    const select = new Select((obj: {a: number})=> obj.a);
    select.select({a: 1});
    expect(select.selected({a: 1})).to.be.ok;
  });
});
