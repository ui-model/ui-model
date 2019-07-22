import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'animateTransform',
})
export class SvgAnimateTransformDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }

    get accumulate(): string {
    return getAttr(this.elementRef, 'accumulate');
  }

  @Input('accumulate')
  set accumulate(value: string) {
    setAttr(this.elementRef, 'accumulate', value);
  }


  get additive(): string {
    return getAttr(this.elementRef, 'additive');
  }

  @Input('additive')
  set additive(value: string) {
    setAttr(this.elementRef, 'additive', value);
  }


  get attributeName(): string {
    return getAttr(this.elementRef, 'attributeName');
  }

  @Input('attributeName')
  set attributeName(value: string) {
    setAttr(this.elementRef, 'attributeName', value);
  }


  get attributeType(): string {
    return getAttr(this.elementRef, 'attributeType');
  }

  @Input('attributeType')
  set attributeType(value: string) {
    setAttr(this.elementRef, 'attributeType', value);
  }


  get begin(): string {
    return getAttr(this.elementRef, 'begin');
  }

  @Input('begin')
  set begin(value: string) {
    setAttr(this.elementRef, 'begin', value);
  }


  get by(): string {
    return getAttr(this.elementRef, 'by');
  }

  @Input('by')
  set by(value: string) {
    setAttr(this.elementRef, 'by', value);
  }


  get calcMode(): string {
    return getAttr(this.elementRef, 'calcMode');
  }

  @Input('calcMode')
  set calcMode(value: string) {
    setAttr(this.elementRef, 'calcMode', value);
  }


  get dur(): string {
    return getAttr(this.elementRef, 'dur');
  }

  @Input('dur')
  set dur(value: string) {
    setAttr(this.elementRef, 'dur', value);
  }


  get end(): string {
    return getAttr(this.elementRef, 'end');
  }

  @Input('end')
  set end(value: string) {
    setAttr(this.elementRef, 'end', value);
  }


  get externalResourcesRequired(): string {
    return getAttr(this.elementRef, 'externalResourcesRequired');
  }

  @Input('externalResourcesRequired')
  set externalResourcesRequired(value: string) {
    setAttr(this.elementRef, 'externalResourcesRequired', value);
  }


  get fill(): string {
    return getAttr(this.elementRef, 'fill');
  }

  @Input('fill')
  set fill(value: string) {
    setAttr(this.elementRef, 'fill', value);
  }


  get from(): string {
    return getAttr(this.elementRef, 'from');
  }

  @Input('from')
  set from(value: string) {
    setAttr(this.elementRef, 'from', value);
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get keySplines(): string {
    return getAttr(this.elementRef, 'keySplines');
  }

  @Input('keySplines')
  set keySplines(value: string) {
    setAttr(this.elementRef, 'keySplines', value);
  }


  get keyTimes(): string {
    return getAttr(this.elementRef, 'keyTimes');
  }

  @Input('keyTimes')
  set keyTimes(value: string) {
    setAttr(this.elementRef, 'keyTimes', value);
  }


  get max(): string {
    return getAttr(this.elementRef, 'max');
  }

  @Input('max')
  set max(value: string) {
    setAttr(this.elementRef, 'max', value);
  }


  get min(): string {
    return getAttr(this.elementRef, 'min');
  }

  @Input('min')
  set min(value: string) {
    setAttr(this.elementRef, 'min', value);
  }


  get repeatCount(): string {
    return getAttr(this.elementRef, 'repeatCount');
  }

  @Input('repeatCount')
  set repeatCount(value: string) {
    setAttr(this.elementRef, 'repeatCount', value);
  }


  get repeatDur(): string {
    return getAttr(this.elementRef, 'repeatDur');
  }

  @Input('repeatDur')
  set repeatDur(value: string) {
    setAttr(this.elementRef, 'repeatDur', value);
  }


  get requiredExtensions(): string {
    return getAttr(this.elementRef, 'requiredExtensions');
  }

  @Input('requiredExtensions')
  set requiredExtensions(value: string) {
    setAttr(this.elementRef, 'requiredExtensions', value);
  }


  get requiredFeatures(): string {
    return getAttr(this.elementRef, 'requiredFeatures');
  }

  @Input('requiredFeatures')
  set requiredFeatures(value: string) {
    setAttr(this.elementRef, 'requiredFeatures', value);
  }


  get restart(): string {
    return getAttr(this.elementRef, 'restart');
  }

  @Input('restart')
  set restart(value: string) {
    setAttr(this.elementRef, 'restart', value);
  }


  get systemLanguage(): string {
    return getAttr(this.elementRef, 'systemLanguage');
  }

  @Input('systemLanguage')
  set systemLanguage(value: string) {
    setAttr(this.elementRef, 'systemLanguage', value);
  }


  get tabindex(): string {
    return getAttr(this.elementRef, 'tabindex');
  }

  @Input('tabindex')
  set tabindex(value: string) {
    setAttr(this.elementRef, 'tabindex', value);
  }


  get to(): string {
    return getAttr(this.elementRef, 'to');
  }

  @Input('to')
  set to(value: string) {
    setAttr(this.elementRef, 'to', value);
  }


  get type(): string {
    return getAttr(this.elementRef, 'type');
  }

  @Input('type')
  set type(value: string) {
    setAttr(this.elementRef, 'type', value);
  }


  get values(): string {
    return getAttr(this.elementRef, 'values');
  }

  @Input('values')
  set values(value: string) {
    setAttr(this.elementRef, 'values', value);
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
