const authors: {[index: string]: Author} = {
  wzc: {
    name: 'Zhicheng Wang',
    email: 'asnowwolf@gmail.com',
    homepage: 'https://github.com/asnowwolf'
  },
};

export class Author {
  id?: string;
  name: string;
  email?: string;
  homepage?: string;

  static of(id: string): Author {
    return authors[id];
  }
}

