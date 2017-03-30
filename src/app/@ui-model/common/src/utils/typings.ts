export function isFunction(value: any): boolean {
  return typeof value === 'function';
}

export function isUndefined(value?: any): boolean {
  return typeof value === 'undefined';
}

export function isString(value: any): boolean {
  return typeof value === 'string';
}

export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

export function isBoolean(value: any): boolean {
  return typeof value === 'boolean';
}

export function isDate(value: any): boolean {
  return value instanceof Date;
}

export function isObject(value: any): boolean {
  return value instanceof Object && !isFunction(value);
}

export function isArray(value: any): boolean {
  return value instanceof Array;
}

export function isEmpty(value: any): boolean {
  return !value || value.length === 0 || isObject(value) && Object.keys(value).length === 0;
}
