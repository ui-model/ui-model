export class Predicates {
  static any(v1: any, v2: any): boolean {
    return v1 === v2;
  }

  static string(v1: any, v2: any): boolean {
    return (v1 || '').toString() === (v2 || '').toString();
  }

  static number(v1: any, v2: any): boolean {
    return +v1 === +v2;
  }

  static boolean(v1: any, v2: any): boolean {
    if (isNaN(v1) || isNaN(v2)) {
      return false;
    }
    return !!v1 === !!v2;
  }
}
