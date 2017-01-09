import {expect} from 'chai';
import {Comparators} from './comparator';

describe('Comparator interface', () => {
  it('string', () => {
    expect(Comparators.string('1', '1')).to.equal(0);
    expect(Comparators.string('12', '1')).to.greaterThan(0);
  });
  it('string() cannot compare two objects properly', () => {
    expect(Comparators.string({a: 1}, {b: 1})).to.equal(0);
  });

  it('number', () => {
    expect(Comparators.number(2, 1)).to.greaterThan(0);
    expect(Comparators.number('12', 1)).to.greaterThan(0);
  });
  it('number: When compare, NaN is equal to NaN', () => {
    expect(Comparators.number('A', NaN)).to.equal(0);
  });

  it('boolean', () => {
    expect(Comparators.boolean(0, 1)).to.lessThan(0);
    expect(Comparators.boolean('12', 1)).to.equal(0);
  });
  it('boolean: When compare, NaN is equal to NaN', () => {
    expect(Comparators.boolean(NaN, NaN)).to.equal(0);
  });
});
