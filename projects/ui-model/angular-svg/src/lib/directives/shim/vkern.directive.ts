import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'vkern',
})
export class SvgVkernDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }

    get g1(): string {
    return getAttr(this.elementRef, 'g1');
  }

  @Input('g1')
  set g1(value: string) {
    setAttr(this.elementRef, 'g1', value);
  }


  get g2(): string {
    return getAttr(this.elementRef, 'g2');
  }

  @Input('g2')
  set g2(value: string) {
    setAttr(this.elementRef, 'g2', value);
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get k(): string {
    return getAttr(this.elementRef, 'k');
  }

  @Input('k')
  set k(value: string) {
    setAttr(this.elementRef, 'k', value);
  }


  get tabindex(): string {
    return getAttr(this.elementRef, 'tabindex');
  }

  @Input('tabindex')
  set tabindex(value: string) {
    setAttr(this.elementRef, 'tabindex', value);
  }


  get u1(): string {
    return getAttr(this.elementRef, 'u1');
  }

  @Input('u1')
  set u1(value: string) {
    setAttr(this.elementRef, 'u1', value);
  }


  get u2(): string {
    return getAttr(this.elementRef, 'u2');
  }

  @Input('u2')
  set u2(value: string) {
    setAttr(this.elementRef, 'u2', value);
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
