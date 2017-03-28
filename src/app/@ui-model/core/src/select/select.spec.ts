import {Select} from './select';
import {Transformers} from '@ui-model/common';

describe('Select', () => {
  it('select', () => {
    const select = new Select();
    select.select(1);
    expect(select.selected(1)).toBeTruthy();
    expect(select.selected(2)).toBeFalsy();
  });

  it('deselect', () => {
    const select = new Select();
    select.select(1);
    select.deselect();
    expect(select.selection).toBeUndefined();
  });

  it('changes', (done) => {
    const select = new Select();
    select.changes.subscribe((value) => {
      expect(value.selection).toEqual(1);
      done();
    });
    select.select(1);
  });

  it('selection', () => {
    const select = new Select();
    select.select(1);
    expect(select.selection).toEqual(1);
  });
  it('if use identity transformer, we cant lookup object properly', () => {
    const select = new Select().setTransformer(Transformers.identity);
    select.select({a: 1});
    expect(select.selected({a: 1})).toBeFalsy();
  });
  it('when using object transformer, we can lookup object properly', () => {
    const select = new Select().setTransformer(Transformers.objectByField('a'));
    select.select({a: 1});
    expect(select.selected({a: 1})).toBeTruthy();
  });
});
