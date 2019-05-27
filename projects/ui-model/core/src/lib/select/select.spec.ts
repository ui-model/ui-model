import { identity, objectByField } from '@ui-model/common';
import { Select } from './select';

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

  it('selected', () => {
    const select = new Select();
    select.select(1);
    expect(select.selected(1)).toBeTruthy();
    expect(select.selected(2)).toBeFalsy();
    expect(select.isActive(1)).toBeTruthy();
    expect(select.isActive(2)).toBeFalsy();
  });

  it('selection', () => {
    const select = new Select();
    select.select(1);
    expect(select.selection).toEqual(1);
  });

  it('selection with transformer', () => {
    const select = new Select().setTransformer(objectByField('a'));
    select.select({ a: 1 });
    expect(select.selection).toEqual({ a: 1 });
  });

  it('if use identity transformer, we cannot lookup object properly', () => {
    const select = new Select().setTransformer(identity);
    select.select({ a: 1 });
    expect(select.selected({ a: 1 })).toBeFalsy();
  });
  it('when using object transformer, we can lookup object properly', () => {
    const select = new Select().setTransformer(objectByField('a'));
    select.select({ a: 1 });
    expect(select.selected({ a: 1 })).toBeTruthy();
  });

  it('valueField', () => {
    const select = new Select<{ a: string }>()
      .setValueField('a');
    expect(select.transformer({ a: '1' })).toEqual('1');
  });
});
