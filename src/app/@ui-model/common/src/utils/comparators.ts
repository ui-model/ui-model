import { isBoolean, isDate, isNumber, isString } from './typings';

export class Comparators {
  static any(v1: any, v2: any): number {
    if (isString(v1)) {
      return Comparators.string(v1, v2);
    } else if (isNumber(v1)) {
      return Comparators.number(v1, v2);
    } else if (isBoolean(v1)) {
      return Comparators.boolean(v1, v2);
    } else if (isDate(v1)) {
      return Comparators.date(v1, v2);
    }
  }

  static string(v1: any, v2: any): number {
    return (v1 || '').toString().localeCompare((v2 || '').toString());
  };

  static number(v1: any, v2: any): number {
    return (+v1 || 0) - (+v2 || 0);
  };

  static boolean(v1: any, v2: any): number {
    if (!!v1 === !!v2) {
      return 0;
    }
    if (!!v1 && !v2) {
      return 1;
    }
    return -1;
  };

  static date(v1: any, v2: any): number {
    return new Date(v1).getTime() - new Date(v2).getTime();
  }
}
