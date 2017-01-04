export interface Comparator<T> {
  (v1: T, v2: T): number;
}

export class Comparators {
  static string(v1: string, v2: string): number {
    return (v1 || '').toString().localeCompare((v2 || '').toString());
  };

  static number(v1: number, v2: number): number {
    return (v1 || 0) - (v2 || 0);
  };

  static boolean(v1: boolean, v2: boolean): number {
    if (v1 === v2) {
      return 0;
    }
    if (v1 && !v2) {
      return 1;
    }
    return -1;
  };
}
