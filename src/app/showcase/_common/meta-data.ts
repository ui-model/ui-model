import {Author} from './author';
import {Observable} from 'rxjs';
export class Metadata {
  id: string = '';
  title: string = '';
  tags: string[] = [];
  description: string = '';
  document: Observable<string>;
  authors: Author[] = [];

  setId(value: string): this {
    this.id = value;
    return this;
  }

  setTitle(value: string): this {
    this.title = value;
    return this;
  }

  setDescription(value: string): this {
    this.description = value;
    return this;
  }

  setTags(value: string[]): this {
    this.tags = value;
    return this;
  }

  setAuthors(value: string[]): this {
    this.authors = value.map(Author.of);
    return this;
  }
}
