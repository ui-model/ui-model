import { Select } from './select';
import { expect } from 'chai';
import { Suppliers } from '../utils/supplier';

describe('Select', () => {
  it('select', () => {
    const select = new Select();
    select.select(1);
    expect(select.selected(1)).to.be.ok;
    expect(select.selected(2)).to.not.be.ok;
  });

  it('changes', (done) => {
    const select = new Select();
    select.changes.subscribe((value) => {
      expect(value).to.equal(1);
      done();
    });
    select.select(1);
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
    const select = new Select(Suppliers.objectByField('a'));
    select.select({a: 1});
    expect(select.selected({a: 1})).to.be.ok;
  });
});
