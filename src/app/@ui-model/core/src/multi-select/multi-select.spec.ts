import { MultiSelect } from './multi-select';
import { Transformers } from '@ui-model/common';

const options = [
  1,
  2,
  3,
];

describe('Multi Select', () => {
  it('constructor', () => {
    const select = new MultiSelect().setOptions(options);
    expect(select.options)
      .toEqual([
        1,
        2,
        3,
      ]);
  });
  it('select', () => {
    const select = new MultiSelect().setOptions(options);
    select.select(1);
    expect(select.anySelected).toBeTruthy();
    expect(select.allSelected).toBeFalsy();
    expect(select.anyUnselected).toBeTruthy();
    expect(select.indeterminate).toBeTruthy();
    expect(select.selected(1)).toBeTruthy();
    expect(select.unselected(1)).toBeFalsy();
    expect(select.selected(2)).toBeFalsy();
    expect(select.unselected(2)).toBeTruthy();
  });

  it('no options', () => {
    const select = new MultiSelect();
    expect(select.allSelected).toBeFalsy();
    expect(select.anySelected).toBeFalsy();
    expect(select.anyUnselected).toBeFalsy();
    expect(select.indeterminate).toBeFalsy();
    expect(select.selected(1)).toBeFalsy();
    expect(select.unselected(1)).toBeTruthy();
  });

  it('changes', (done) => {
    const select = new MultiSelect().setOptions(options);
    select.changes.subscribe((value) => {
      expect(value.selection).toEqual([1]);
      done();
    });
    select.select(1);
  });

  it('select & deselect & toggle', () => {
    const select = new MultiSelect().setOptions(options);
    select.select(1);
    expect(select.selected(1)).toBeTruthy();
    select.deselect(1);
    expect(select.selected(1)).toBeFalsy();
    select.toggle(1);
    expect(select.selected(1)).toBeTruthy();
    select.selectAs(1, false);
    expect(select.selected(1)).toBeFalsy();
    select.selectAs(1, true);
    expect(select.selected(1)).toBeTruthy();
  });
  it('selectAll & deselectAll', () => {
    const select = new MultiSelect().setOptions(options);
    select.selectAll();
    expect(select.allSelected).toBeTruthy();
    select.deselectAll();
    expect(select.anySelected).toBeFalsy();
    select.allSelected = true;
    expect(select.allSelected).toBeTruthy();
  });
  it('toggleAll', () => {
    const select = new MultiSelect().setOptions(options);
    select.toggleAll();
    expect(select.allSelected).toBeTruthy();
    select.toggleAll();
    expect(select.anySelected).toBeFalsy();
  });
  it('selection', () => {
    const select = new MultiSelect().setOptions(options);
    select.select(1);
    expect(select.selection).toEqual([1]);
    select.select(2);
    expect(select.selection).toEqual([1, 2]);
  });
  it('transformer', () => {
    const select = new MultiSelect<{ a: string }>()
      .setOptions([
        {a: '1'},
        {a: '2'},
        {a: '3'},
      ])
      .setTransformer(Transformers.objectByField('a'));
    select.select({a: '1'});
    expect(select.selected({a: '1'})).toBeTruthy();
  });
  it('valueField', () => {
    const select = new MultiSelect<{ a: string }>()
      .setValueField('a');
    expect(select.transformer({a: '1'})).toEqual('1');
  });
});
