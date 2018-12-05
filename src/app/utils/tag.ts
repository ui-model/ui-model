export class Tag {
  keyword: string;
  weight = 0;

  static of(keyword: string): Tag {
    return { keyword: keyword, weight: 0 };
  }
}
