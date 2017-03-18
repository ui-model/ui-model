export function isFunction(value): boolean {
  return typeof value === 'function';
}

export function isUndefined(value?): boolean {
  return typeof value === 'undefined';
}

export function isString(value): boolean {
  return typeof value === 'string';
}

export function isNumber(value): boolean {
  return typeof value === 'number';
}

export function isBoolean(value): boolean {
  return typeof value === 'boolean';
}

export function isDate(value): boolean {
  return value instanceof Date;
}

export function isObject(value): boolean {
  return value instanceof Object && !isFunction(value);
}

export function isArray(value): boolean {
  return value instanceof Array;
}

export function isEmpty(value): boolean {
  return !value || value.length === 0 || isObject(value) && Object.keys(value).length === 0;
}
