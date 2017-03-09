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
