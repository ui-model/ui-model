import { Pipe, PipeTransform } from '@angular/core';
import * as MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();
markdown.use(require('markdown-it-abbr'));
markdown.use(require('markdown-it-deflist'));
markdown.use(require('markdown-it-emoji'));
markdown.use(require('markdown-it-footnote'));
markdown.use(require('markdown-it-ins'));
markdown.use(require('markdown-it-mark'));
markdown.use(require('markdown-it-sub'));
markdown.use(require('markdown-it-sup'));
markdown.use(require('markdown-it-table-of-contents'));

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return markdown.render(value);
  }
}
