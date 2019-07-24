import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'font-face-uri',
})
export class SvgFontFaceUriDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get xlinkActuate(): string {
    return getAttr(this.elementRef, 'xlink:actuate');
  }

  @Input('xlink:actuate')
  set xlinkActuate(value: string) {
    setAttr(this.elementRef, 'xlink:actuate', value);
  }


  get xlinkArcrole(): string {
    return getAttr(this.elementRef, 'xlink:arcrole');
  }

  @Input('xlink:arcrole')
  set xlinkArcrole(value: string) {
    setAttr(this.elementRef, 'xlink:arcrole', value);
  }


  get xlinkHref(): string {
    return getAttr(this.elementRef, 'xlink:href');
  }

  @Input('xlink:href')
  set xlinkHref(value: string) {
    setAttr(this.elementRef, 'xlink:href', value);
  }


  get xlinkRole(): string {
    return getAttr(this.elementRef, 'xlink:role');
  }

  @Input('xlink:role')
  set xlinkRole(value: string) {
    setAttr(this.elementRef, 'xlink:role', value);
  }


  get xlinkShow(): string {
    return getAttr(this.elementRef, 'xlink:show');
  }

  @Input('xlink:show')
  set xlinkShow(value: string) {
    setAttr(this.elementRef, 'xlink:show', value);
  }


  get xlinkTitle(): string {
    return getAttr(this.elementRef, 'xlink:title');
  }

  @Input('xlink:title')
  set xlinkTitle(value: string) {
    setAttr(this.elementRef, 'xlink:title', value);
  }


  get xlinkType(): string {
    return getAttr(this.elementRef, 'xlink:type');
  }

  @Input('xlink:type')
  set xlinkType(value: string) {
    setAttr(this.elementRef, 'xlink:type', value);
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
