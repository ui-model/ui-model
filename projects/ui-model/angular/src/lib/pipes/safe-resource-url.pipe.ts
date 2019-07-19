import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isString } from '@ui-model/core';

@Pipe({
  name: 'safeResourceUrl',
})
export class SafeResourceUrlPipe implements PipeTransform, OnDestroy {

  constructor(private sanitizer: DomSanitizer) {
  }

  private blobUrls = [];

  transform(value: string | File): SafeResourceUrl {
    let url;
    if (isString(value)) {
      url = value as string;
    } else {
      url = URL.createObjectURL(value);
      this.blobUrls.push(url);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(): void {
    this.blobUrls.forEach((url) => {
      URL.revokeObjectURL(url);
    });
  }
}
