/* tslint:disable:directive-selector */
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[srcFile]',
})
export class ImgSrcFileDirective {

  constructor(private element: ElementRef<Element>, private renderer: Renderer2) {
  }

  private url: string;

  private _srcFile: Blob;

  get srcFile(): Blob {
    return this._srcFile;
  }

  @Input()
  set srcFile(value: Blob) {
    this._srcFile = value;
    this.cleanUp();
    this.url = URL.createObjectURL(value);
    this.renderer.setAttribute(this.element.nativeElement, 'src', this.url);
  }

  cleanUp(): void {
    if (isBlobUrl(this.url)) {
      URL.revokeObjectURL(this.url);
    }
  }

  @HostListener('load')
  private loaded(): void {
    this.cleanUp();
  }
}

function isBlobUrl(url: string): boolean {
  return /blob:/.test(url);
}
