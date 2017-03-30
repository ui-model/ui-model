import {Pipe, PipeTransform} from '@angular/core';
import {highlightAuto} from 'highlight.js';
const defaultLanguages = ['ts', 'js', 'html', 'scss', 'css'];
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, language: string = 'ts'): string {
    if (!value) {
      return;
    }
    return highlightAuto(value, [language].concat(defaultLanguages)).value;
  }
}
