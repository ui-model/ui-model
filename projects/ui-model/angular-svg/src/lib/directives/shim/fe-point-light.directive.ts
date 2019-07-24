import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'fePointLight',
})
export class SvgFePointLightDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get x(): string | number {
    return getAttr(this.elementRef, 'x');
  }

  @Input('x')
  set x(value: string | number) {
    setAttr(this.elementRef, 'x', value);
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


  get y(): string | number {
    return getAttr(this.elementRef, 'y');
  }

  @Input('y')
  set y(value: string | number) {
    setAttr(this.elementRef, 'y', value);
  }


  get z(): number {
    return getAttr(this.elementRef, 'z');
  }

  @Input('z')
  set z(value: number) {
    setAttr(this.elementRef, 'z', value);
  }

}
