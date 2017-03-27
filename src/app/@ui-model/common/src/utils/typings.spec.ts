import {expect} from 'chai';
import {isFunction, isUndefined, isDate, isNumber, isObject, isString, isBoolean, isArray, isEmpty} from './typings';

describe('Typings', () => {
  it('isFunction', () => {
    expect(isFunction(() => {
    })).to.be.ok;
    expect(isFunction(1)).to.not.be.ok;
  });
  it('isUndefined', () => {
    expect(isUndefined()).to.be.ok;
    expect(isUndefined(undefined)).to.be.ok;
    expect(isUndefined(() => {
    })).to.not.be.ok;
  });
  it('isNumber', () => {
    expect(isNumber(1)).to.be.ok;
    expect(isNumber('1')).to.not.be.ok;
  });
  it('isBoolean', () => {
    expect(isBoolean(true)).to.be.ok;
    expect(isBoolean(false)).to.be.ok;
    expect(isBoolean(1)).to.not.be.ok;
  });
  it('isDate', () => {
    expect(isDate(new Date())).to.be.ok;
    expect(isDate(1)).to.not.be.ok;
  });
  it('isObject', () => {
    expect(isObject({})).to.be.ok;
    expect(isObject(new Date())).to.be.ok;
    expect(isObject(() => {
    })).to.not.be.ok;
    expect(isObject(1)).to.not.be.ok;
  });
  it('isString', () => {
    expect(isString('123')).to.be.ok;
    expect(isString(1)).to.not.be.ok;
  });
  it('isArray', () => {
    expect(isArray([1, 2, 3])).to.be.ok;
  });

  it('isEmpty', () => {
    expect(isEmpty({})).to.be.ok;
    expect(isEmpty([])).to.be.ok;
    expect(isEmpty(1)).to.not.be.ok;
  })
});
