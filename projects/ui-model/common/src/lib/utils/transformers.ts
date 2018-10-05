import { isObject, isUndefined } from './typings';
import { Transformer } from './transformer';

export function identity(fromData: any): any {
  return fromData;
}

export function objectByField(field: string): Transformer<Object, any> {
  return (fromData: Object) => {
    if (isObject(fromData)) {
      if (!isUndefined(fromData[field])) {
        return fromData[field];
      } else {
        // If neither of them have this field, we think they are not equal. So we return NaN because NaN! == NaN.
        return NaN;
      }
    } else {
      return fromData;
    }
  };
}

export function objectById(formData: any): any {
  return objectByField('id')(formData);
}

export function asString(fromData: any): string {
  if (!fromData) {
    return '';
  }
  return fromData.toString();
}
