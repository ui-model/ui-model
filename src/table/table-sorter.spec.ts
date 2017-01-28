import {TableSorter} from './table-sorter';
import {TableField} from './table-field';
import {DataType} from '../utils/data-type';
import {expect} from 'chai';
const fields: TableField[] = [
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
].map(TableField.from);
describe('TableSorter', () => {
  it('changes', (done) => {
    const sorter = new TableSorter(fields);
    sorter.changes.subscribe((value) => {
      expect(value.name).to.equal('a');
      done();
    });
    sorter.toggle(fields[0]);
  });
  it('no sort', () => {
    const sorter = new TableSorter(fields);
    expect(sorter.compare({a: 1}, {a: 2})).to.be.NaN;
  });
  it('sort by a', () => {
    const sorter = new TableSorter(fields);
    sorter.toggle(fields[0]);
    expect(sorter.compare({a: 1}, {a: 2})).to.lessThan(0);
  });
});
