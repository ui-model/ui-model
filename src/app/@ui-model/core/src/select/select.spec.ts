import {expect} from 'chai';
import {Select} from './select';
import {Transformers} from '@ui-model/common';

describe('Select', () => {
  it('select', () => {
    const select = new Select();
    select.select(1);
    expect(select.selected(1)).to.be.ok;
    expect(select.selected(2)).to.not.be.ok;
  });

  it('deselect', ()=> {
    const select = new Select();
    select.select(1);
    select.deselect();
    expect(select.selection).to.be.undefined;
  });

  it('changes', (done) => {
    const select = new Select();
    select.changes.subscribe((value) => {
      expect(value.selection).to.equal(1);
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
