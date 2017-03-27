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

  it('date', () => {
    expect(Comparators.date('1900-01-01', '1900-01-02')).to.lessThan(0);
    expect(Comparators.date('1900-01-03', '1900-01-02')).to.greaterThan(0);
  });

  it('any', () => {
    expect(Comparators.any(0, 1)).to.lessThan(0);
    expect(Comparators.any('10', '1')).to.greaterThan(0);
    expect(Comparators.any(true, false)).to.greaterThan(0);
    expect(Comparators.any(new Date('1900-01-01'), new Date('1900-01-02'))).to.lessThan(0);
  });
});
