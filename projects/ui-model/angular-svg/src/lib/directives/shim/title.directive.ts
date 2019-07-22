import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'title',
})
export class SvgTitleDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }

    get class(): string {
    return getAttr(this.elementRef, 'class');
  }

  @Input('class')
  set class(value: string) {
    setAttr(this.elementRef, 'class', value);
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get style(): string {
    return getAttr(this.elementRef, 'style');
  }

  @Input('style')
  set style(value: string) {
    setAttr(this.elementRef, 'style', value);
  }


  get tabindex(): string {
    return getAttr(this.elementRef, 'tabindex');
  }

  @Input('tabindex')
  set tabindex(value: string) {
    setAttr(this.elementRef, 'tabindex', value);
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
