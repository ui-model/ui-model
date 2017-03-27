import {expect} from 'chai';
import {Transformer, Transformers} from './transformer';

describe('Transformer', () => {
  it('identity', () => {
    expect(Transformers.identity('a')).to.equal('a');
  });

  it('identity apply to object', () => {
    expect(Transformers.identity({a: 1})).to.not.equal({a: 1});
  });

  it('toString: convert to string', () => {
    expect(Transformers.toString(1)).to.equal('1');
  });

  it('objectById', () => {
    expect(Transformers.objectById({id: 1})).to.equal(1);
  });

  it('objectByField', () => {
    expect(Transformers.objectByField('a')({a: 1})).to.equal(1);
  });
  it('objectByField: field not found', () => {
    expect(Transformers.objectByField('a')({b: 1})).to.be.NaN;
  });
});
