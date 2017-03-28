import {isArray, isBoolean, isDate, isEmpty, isFunction, isNumber, isObject, isString, isUndefined} from './typings';

describe('Typings', () => {
  it('isFunction', () => {
    expect(isFunction(() => {
    })).toBeTruthy();
    expect(isFunction(1)).toBeFalsy();
  });
  it('isUndefined', () => {
    expect(isUndefined()).toBeTruthy();
    expect(isUndefined(undefined)).toBeTruthy();
    expect(isUndefined(() => {
    })).toBeFalsy();
  });
  it('isNumber', () => {
    expect(isNumber(1)).toBeTruthy();
    expect(isNumber('1')).toBeFalsy();
  });
  it('isBoolean', () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean(1)).toBeFalsy();
  });
  it('isDate', () => {
    expect(isDate(new Date())).toBeTruthy();
    expect(isDate(1)).toBeFalsy();
  });
  it('isObject', () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject(new Date())).toBeTruthy();
    expect(isObject(() => {
    })).toBeFalsy();
    expect(isObject(1)).toBeFalsy();
  });
  it('isString', () => {
    expect(isString('123')).toBeTruthy();
    expect(isString(1)).toBeFalsy();
  });
  it('isArray', () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
  });

  it('isEmpty', () => {
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty(1)).toBeFalsy();
  });
});
