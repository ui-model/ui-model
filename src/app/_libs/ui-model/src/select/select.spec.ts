import {expect} from 'chai';
import {Select} from './select';
import {Transformers} from '../utils/transformer';

describe('Select', () => {
  it('select', () => {
    const select = new Select();
    select.select(1);
    expect(select.selected(1)).to.be.ok;
    expect(select.selected(2)).to.not.be.ok;
  });

  it('changes', (done) => {
    const select = new Select();
    select.changes.then((select) => {
      expect(select.selection).to.equal(1);
      done();
    });
    select.select(1);
  });

  it('selection', () => {
    const select = new Select();
    select.select(1);
    expect(select.selection).to.equal(1);
  });
  it('if use identity transformer, we cant lookup object properly', () => {
    const select = new Select().setTransformer(Transformers.identity);
    select.select({a: 1});
    expect(select.selected({a: 1})).to.not.be.ok;
  });
  it('when using object transformer, we can lookup object properly', () => {
    const select = new Select().setTransformer(Transformers.objectByField('a'));
    select.select({a: 1});
    expect(select.selected({a: 1})).to.be.ok;
  });
});
