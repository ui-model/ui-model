import { Pipe, PipeTransform } from '@angular/core';
import * as MarkdownIt from 'markdown-it';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  markdown = new MarkdownIt();
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return this.markdown.render(value);
  }
}
