import {Pipe, PipeTransform} from '@angular/core';
import * as MarkdownIt from 'markdown-it';
import * as hljs from 'highlight.js';

declare function require(id: string): any;

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
markdown.use(highlighter);

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

function highlighter(params: { options }): void {
  params.options.highlight = (code, lang) => {
    return hljs.highlightAuto(code, lang ? [lang] : ['ts', 'js', 'html', 'scss', 'css']).value;
  };
}
