import {expect} from 'chai';
import {Predicates} from './predicate';

describe('Predicate interface', () => {
  it('any', () => {
    expect(Predicates.any(1, 1)).to.be.true;
    expect(Predicates.any('1', '1')).to.be.true;
    expect(Predicates.any('1', 1)).to.be.false;
    expect(Predicates.any({a: 1}, {a: 1})).to.be.false;
  });
  it('string', () => {
    expect(Predicates.string('1', '1')).to.be.true;
    expect(Predicates.string('1', 1)).to.be.true;
  });
  it('string() cannot compare two objects properly', () => {
    expect(Predicates.string({a: 1}, {b: 1})).to.be.true;
  });

  it('number', () => {
    expect(Predicates.number(1, 1)).to.be.true;
    expect(Predicates.number('1', 1)).to.be.true;
  });
  it('number: NaN is not equal to NaN', () => {
    expect(Predicates.number('A', NaN)).to.be.false;
  });

  it('boolean', () => {
    expect(Predicates.boolean(0, 1)).to.be.false;
    expect(Predicates.boolean(1, 2)).to.be.true;
    expect(Predicates.boolean('0', 1)).to.be.true;
    expect(Predicates.boolean('1', 2)).to.be.true;
    expect(Predicates.boolean(NaN, NaN)).to.be.false;
  });
});
