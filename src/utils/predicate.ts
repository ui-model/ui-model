export interface Predicate<T> {
  (v1: T, v2: T): boolean;
}

export class Predicates {
  static any(v1: any, v2: any): boolean {
    return v1 === v2;
  }
  static string(v1: string, v2: string): boolean {
    return (v1 || '') === (v2 || '');
  };

  static number(v1: number, v2: number): boolean {
    return (v1 || 0) === (v2 || 0);
  };

  static boolean(v1: boolean, v2: boolean): boolean {
    return (v1 || false) === (v2 || false);
  };
}
