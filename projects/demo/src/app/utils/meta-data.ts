import { Author } from './author';
import { Tag } from './tag';

export class Metadata {
  id = '';
  title = '';
  tags: Tag[] = [];
  description = '';
  authors: Author[];
}
