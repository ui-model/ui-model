import {Directive, ElementRef, Renderer, HostListener, Input} from '@angular/core';

@Directive({
  selector: 'img[srcFile]',
})
export class ImgSrcFileDirective {
  private url: string;

  private _srcFile: Blob;

  get srcFile(): Blob {
    return this._srcFile;
  }

  @Input()
  set srcFile(value: Blob) {
    this._srcFile = value;
    this.cleanUp();
    this.url = URL.createObjectURL(value, {oneTimeOnly: true});
    this.renderer.setElementAttribute(this.element.nativeElement, 'src', this.url);
  }

  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  @HostListener('load')
  private loaded(): void {
    this.cleanUp();
  }

  cleanUp(): void {
    if (isBlobUrl(this.url)) {
      URL.revokeObjectURL(this.url);
    }
  }
}

function isBlobUrl(url: string): boolean {
  return /blob:/.test(url);
}
