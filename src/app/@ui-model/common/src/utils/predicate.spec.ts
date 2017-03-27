import {Predicates} from './predicate';

describe('Predicate interface', () => {
  it('any', () => {
    expect(Predicates.any(1, 1)).toBeTruthy();
    expect(Predicates.any('1', '1')).toBeTruthy();
    expect(Predicates.any('1', 1)).toBeFalsy();
    expect(Predicates.any({a: 1}, {a: 1})).toBeFalsy();
  });
  it('string', () => {
    expect(Predicates.string('1', '1')).toBeTruthy();
    expect(Predicates.string('1', 1)).toBeTruthy();
  });
  it('string() cannot compare two objects properly', () => {
    expect(Predicates.string({a: 1}, {b: 1})).toBeTruthy();
  });

  it('number', () => {
    expect(Predicates.number(1, 1)).toBeTruthy();
    expect(Predicates.number('1', 1)).toBeTruthy();
  });
  it('number: NaN is not equal to NaN', () => {
    expect(Predicates.number('A', NaN)).toBeFalsy();
  });

  it('boolean', () => {
    expect(Predicates.boolean(0, 1)).toBeFalsy();
    expect(Predicates.boolean(1, 2)).toBeTruthy();
    expect(Predicates.boolean('0', 1)).toBeTruthy();
    expect(Predicates.boolean('1', 2)).toBeTruthy();
    expect(Predicates.boolean(NaN, NaN)).toBeFalsy();
  });
});
