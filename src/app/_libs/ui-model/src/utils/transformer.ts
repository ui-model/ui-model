import {isObject, isUndefined} from 'util';

export type Transformer<FromType, ToType> = (value: FromType) => ToType;

export class Transformers {
  static objectById = Transformers.objectByField('id');

  static identity(fromData: any): any {
    return fromData;
  }

  static objectByField(field: string): Transformer<Object, any> {
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

  static toString(fromData: any): string {
    if (!fromData) {
      return '';
    }
    return fromData.toString();
  }
}
