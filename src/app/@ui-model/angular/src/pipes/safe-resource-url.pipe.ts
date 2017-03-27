import {Pipe, PipeTransform, OnDestroy} from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import {isString} from '@ui-model/common';

@Pipe({
  name: 'safeResourceUrl'
})
export class SafeResourceUrlPipe implements PipeTransform, OnDestroy {
  constructor(private sanitizer: DomSanitizer) {
  }

  private blobUrls = [];

  transform(value: string|File): SafeResourceUrl {
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
