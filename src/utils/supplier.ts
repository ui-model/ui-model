export interface Supplier<FromType, ToType> {
  (value: FromType): ToType;
}

export class Suppliers {
  static identity(fromData: any): any {
    return fromData;
  }

  static object(fromData: any): string {
    if (fromData instanceof Object) {
      if (fromData.hasOwnProperty('id')) {
        return fromData['id'];
      } else {
        return JSON.stringify(fromData);
      }
    } else {
      return fromData;
    }
  }

  static toString(fromData: any): string {
    if (!fromData) {
      return '';
    }
    return fromData.toString();
  }
}
