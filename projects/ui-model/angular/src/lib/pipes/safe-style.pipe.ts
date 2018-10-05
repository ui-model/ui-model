import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Pipe({
  name: 'safeStyle',
})
export class SafeStylePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }
}
