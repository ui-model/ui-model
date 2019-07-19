import { asString, identity, objectByField, objectById } from './transformers';

describe('Transformer', () => {
  it('identity', () => {
    expect(identity('a')).toEqual('a');
  });

  it('identity apply to object', () => {
    expect(identity({ a: 1 })).not.toBe({ a: 1 });
  });

  it('toString: convert to string', () => {
    expect(asString(1)).toEqual('1');
  });

  it('objectById', () => {
    expect(objectById({ id: 1 })).toEqual(1);
  });

  it('objectByField', () => {
    expect(objectByField('a')({ a: 1 })).toEqual(1);
  });
  it('objectByField: field not found', () => {
    expect(objectByField('a')({ b: 1 })).toBeNaN();
  });
});
