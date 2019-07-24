import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'style',
})
export class SvgStyleDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get media(): string {
    return getAttr(this.elementRef, 'media');
  }

  @Input('media')
  set media(value: string) {
    setAttr(this.elementRef, 'media', value);
  }


  get title(): string {
    return getAttr(this.elementRef, 'title');
  }

  @Input('title')
  set title(value: string) {
    setAttr(this.elementRef, 'title', value);
  }


  get type(): string {
    return getAttr(this.elementRef, 'type');
  }

  @Input('type')
  set type(value: string) {
    setAttr(this.elementRef, 'type', value);
  }


  get xmlBase(): string {
    return getAttr(this.elementRef, 'xml:base');
  }

  @Input('xml:base')
  set xmlBase(value: string) {
    setAttr(this.elementRef, 'xml:base', value);
  }


  get xmlLang(): string {
    return getAttr(this.elementRef, 'xml:lang');
  }

  @Input('xml:lang')
  set xmlLang(value: string) {
    setAttr(this.elementRef, 'xml:lang', value);
  }


  get xmlSpace(): string {
    return getAttr(this.elementRef, 'xml:space');
  }

  @Input('xml:space')
  set xmlSpace(value: string) {
    setAttr(this.elementRef, 'xml:space', value);
  }

}
