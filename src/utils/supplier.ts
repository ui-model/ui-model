import {isObject, isUndefined} from 'util';

export interface Supplier<FromType, ToType> {
  (value: FromType): ToType;
}

export class Suppliers {
  static identity(fromData: any): any {
    return fromData;
  }

  static objectByField(field: string): Supplier<Object, any> {
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

  static objectById: Supplier<Object, any> = Suppliers.objectByField('id');

  static toString(fromData: any): string {
    if (!fromData) {
      return '';
    }
    return fromData.toString();
  }
}
