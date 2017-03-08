import {Pipe, PipeTransform} from '@angular/core';
import {SafeScript, DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeScript'
})
export class SafeScriptPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string): SafeScript {
    return this.sanitizer.bypassSecurityTrustScript(value);
  }

}
