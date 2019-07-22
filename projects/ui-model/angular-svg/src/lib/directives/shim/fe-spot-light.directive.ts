import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'feSpotLight',
})
export class SvgFeSpotLightDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }

    get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get limitingConeAngle(): string {
    return getAttr(this.elementRef, 'limitingConeAngle');
  }

  @Input('limitingConeAngle')
  set limitingConeAngle(value: string) {
    setAttr(this.elementRef, 'limitingConeAngle', value);
  }


  get pointsAtX(): string {
    return getAttr(this.elementRef, 'pointsAtX');
  }

  @Input('pointsAtX')
  set pointsAtX(value: string) {
    setAttr(this.elementRef, 'pointsAtX', value);
  }


  get pointsAtY(): string {
    return getAttr(this.elementRef, 'pointsAtY');
  }

  @Input('pointsAtY')
  set pointsAtY(value: string) {
    setAttr(this.elementRef, 'pointsAtY', value);
  }


  get pointsAtZ(): string {
    return getAttr(this.elementRef, 'pointsAtZ');
  }

  @Input('pointsAtZ')
  set pointsAtZ(value: string) {
    setAttr(this.elementRef, 'pointsAtZ', value);
  }


  get specularExponent(): string {
    return getAttr(this.elementRef, 'specularExponent');
  }

  @Input('specularExponent')
  set specularExponent(value: string) {
    setAttr(this.elementRef, 'specularExponent', value);
  }


  get tabindex(): string {
    return getAttr(this.elementRef, 'tabindex');
  }

  @Input('tabindex')
  set tabindex(value: string) {
    setAttr(this.elementRef, 'tabindex', value);
  }


  get x(): string {
    return getAttr(this.elementRef, 'x');
  }

  @Input('x')
  set x(value: string) {
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


  get y(): string {
    return getAttr(this.elementRef, 'y');
  }

  @Input('y')
  set y(value: string) {
    setAttr(this.elementRef, 'y', value);
  }


  get z(): string {
    return getAttr(this.elementRef, 'z');
  }

  @Input('z')
  set z(value: string) {
    setAttr(this.elementRef, 'z', value);
  }


}
