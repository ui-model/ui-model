import {TableSorter} from './table-sorter';
import {TableField} from './table-field';
import {expect} from 'chai';
import {DataType} from '@ui-model/common';
const fields: TableField[] = TableField.from([
  {
    name: 'a',
    title: 'A',
    type: DataType.int,
  },
  {
    name: 'b',
    title: 'B',
    type: DataType.string,
  },
]);
describe('TableSorter', () => {
  it('changes', (done) => {
    const sorter = new TableSorter().setFields(fields);
    sorter.changes.subscribe((value) => {
      expect(value.field.name).to.equal('a');
      done();
    });
    sorter.toggle(fields[0]);
  });
  it('no sort', () => {
    const sorter = new TableSorter().setFields(fields);
    expect(sorter.compare({a: 1}, {a: 2})).to.be.NaN;
  });
  it('sort by a', () => {
    const sorter = new TableSorter().setFields(fields);
    sorter.toggle(fields[0]);
    expect(sorter.compare({a: 1}, {a: 2})).to.lessThan(0);
  });
  it('enabled', () => {
    const sorter = new TableSorter().setFields(fields);
    sorter.disable();
    sorter.toggle(fields[0]);
    expect(sorter.field).to.be.undefined;
  });
});
