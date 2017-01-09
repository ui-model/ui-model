export interface Supplier<FromType, ToType> {
  (value: FromType): ToType;
}

export class Suppliers {
  static identity(fromData: any): any {
    return fromData;
  }

  static objectByField(field: string): Supplier<Object, any> {
    return (fromData: Object) => {
      if (fromData instanceof Object) {
        return fromData[field];
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
