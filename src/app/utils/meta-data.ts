import {Author} from './author';
import {Tag} from './tag';

export interface Metadata {
  id: string;
  title: string;
  tags?: Tag[];
  description?: string;
  document?: string;
  authors: Author[];
}
