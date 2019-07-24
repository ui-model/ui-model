import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'view',
})
export class SvgViewDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }


  get externalResourcesRequired(): boolean {
    return getAttr(this.elementRef, 'externalResourcesRequired');
  }

  @Input('externalResourcesRequired')
  set externalResourcesRequired(value: boolean) {
    setAttr(this.elementRef, 'externalResourcesRequired', value);
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get preserveAspectRatio(): string {
    return getAttr(this.elementRef, 'preserveAspectRatio');
  }

  @Input('preserveAspectRatio')
  set preserveAspectRatio(value: string) {
    setAttr(this.elementRef, 'preserveAspectRatio', value);
  }


  get viewBox(): string | string[] {
    return getAttr(this.elementRef, 'viewBox');
  }

  @Input('viewBox')
  set viewBox(value: string | string[]) {
    setAttr(this.elementRef, 'viewBox', value);
  }


  get viewTarget(): string {
    return getAttr(this.elementRef, 'viewTarget');
  }

  @Input('viewTarget')
  set viewTarget(value: string) {
    setAttr(this.elementRef, 'viewTarget', value);
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


  get zoomAndPan(): string {
    return getAttr(this.elementRef, 'zoomAndPan');
  }

  @Input('zoomAndPan')
  set zoomAndPan(value: string) {
    setAttr(this.elementRef, 'zoomAndPan', value);
  }

}
