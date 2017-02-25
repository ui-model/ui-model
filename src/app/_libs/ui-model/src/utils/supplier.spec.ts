import {expect} from 'chai';
import {Supplier, Suppliers} from './supplier';

describe('Supplier', () => {
  it('identity', () => {
    expect(Suppliers.identity('a')).to.equal('a');
  });

  it('identity apply to object', () => {
    expect(Suppliers.identity({a: 1})).to.not.equal({a: 1});
  });

  it('toString: convert to string', () => {
    expect(Suppliers.toString(1)).to.equal('1');
  });

  it('objectById', () => {
    expect(Suppliers.objectById({id: 1})).to.equal(1);
  });

  it('objectByField', () => {
    expect(Suppliers.objectByField('a')({a: 1})).to.equal(1);
  });
  it('objectByField: field not found', () => {
    expect(Suppliers.objectByField('a')({b: 1})).to.be.NaN;
  });
});
