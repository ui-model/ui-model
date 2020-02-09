const authors: { [index: string]: Author } = {
  wzc: {
    name: 'Zhicheng Wang',
    email: 'asnowwolf@gmail.com',
    homepage: 'https://github.com/asnowwolf',
  },
  rex: {
    name: 'Zhimin YE',
  },
};

export class Author {
  id?: string;
  name: string;
  email?: string;
  homepage?: string;

  static of(id: string): Author {
    const result = authors[id];
    result.id = id;
    return result;
  }
}

