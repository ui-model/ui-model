import {Author} from './author';
import {Tag} from './tag';
export class Metadata {
  id = '';
  title = '';
  tags: Tag[] = [];
  description = '';
  document: string;
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
    this.tags = value.map((tag) => {
      return {
        keyword: tag,
        weight: 0,
      };
    });
    return this;
  }

  setAuthors(value: string[]): this {
    this.authors = value.map(Author.of);
    return this;
  }

  setDocument(value: string): this {
    this.document = value;
    return this;
  }
}
