import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'font-face',
})
export class SvgFontFaceDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }

    get accentHeight(): string {
    return getAttr(this.elementRef, 'accent-height');
  }

  @Input('accent-height')
  set accentHeight(value: string) {
    setAttr(this.elementRef, 'accent-height', value);
  }


  get alphabetic(): string {
    return getAttr(this.elementRef, 'alphabetic');
  }

  @Input('alphabetic')
  set alphabetic(value: string) {
    setAttr(this.elementRef, 'alphabetic', value);
  }


  get ascent(): string {
    return getAttr(this.elementRef, 'ascent');
  }

  @Input('ascent')
  set ascent(value: string) {
    setAttr(this.elementRef, 'ascent', value);
  }


  get bbox(): string {
    return getAttr(this.elementRef, 'bbox');
  }

  @Input('bbox')
  set bbox(value: string) {
    setAttr(this.elementRef, 'bbox', value);
  }


  get capHeight(): string {
    return getAttr(this.elementRef, 'cap-height');
  }

  @Input('cap-height')
  set capHeight(value: string) {
    setAttr(this.elementRef, 'cap-height', value);
  }


  get descent(): string {
    return getAttr(this.elementRef, 'descent');
  }

  @Input('descent')
  set descent(value: string) {
    setAttr(this.elementRef, 'descent', value);
  }


  get fontFamily(): string {
    return getAttr(this.elementRef, 'font-family');
  }

  @Input('font-family')
  set fontFamily(value: string) {
    setAttr(this.elementRef, 'font-family', value);
  }


  get fontSize(): string {
    return getAttr(this.elementRef, 'font-size');
  }

  @Input('font-size')
  set fontSize(value: string) {
    setAttr(this.elementRef, 'font-size', value);
  }


  get fontStretch(): string {
    return getAttr(this.elementRef, 'font-stretch');
  }

  @Input('font-stretch')
  set fontStretch(value: string) {
    setAttr(this.elementRef, 'font-stretch', value);
  }


  get fontStyle(): string {
    return getAttr(this.elementRef, 'font-style');
  }

  @Input('font-style')
  set fontStyle(value: string) {
    setAttr(this.elementRef, 'font-style', value);
  }


  get fontVariant(): string {
    return getAttr(this.elementRef, 'font-variant');
  }

  @Input('font-variant')
  set fontVariant(value: string) {
    setAttr(this.elementRef, 'font-variant', value);
  }


  get fontWeight(): string {
    return getAttr(this.elementRef, 'font-weight');
  }

  @Input('font-weight')
  set fontWeight(value: string) {
    setAttr(this.elementRef, 'font-weight', value);
  }


  get hanging(): string {
    return getAttr(this.elementRef, 'hanging');
  }

  @Input('hanging')
  set hanging(value: string) {
    setAttr(this.elementRef, 'hanging', value);
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get ideographic(): string {
    return getAttr(this.elementRef, 'ideographic');
  }

  @Input('ideographic')
  set ideographic(value: string) {
    setAttr(this.elementRef, 'ideographic', value);
  }


  get mathematical(): string {
    return getAttr(this.elementRef, 'mathematical');
  }

  @Input('mathematical')
  set mathematical(value: string) {
    setAttr(this.elementRef, 'mathematical', value);
  }


  get overlinePosition(): string {
    return getAttr(this.elementRef, 'overline-position');
  }

  @Input('overline-position')
  set overlinePosition(value: string) {
    setAttr(this.elementRef, 'overline-position', value);
  }


  get overlineThickness(): string {
    return getAttr(this.elementRef, 'overline-thickness');
  }

  @Input('overline-thickness')
  set overlineThickness(value: string) {
    setAttr(this.elementRef, 'overline-thickness', value);
  }


  get panose1(): string {
    return getAttr(this.elementRef, 'panose-1');
  }

  @Input('panose-1')
  set panose1(value: string) {
    setAttr(this.elementRef, 'panose-1', value);
  }


  get slope(): string {
    return getAttr(this.elementRef, 'slope');
  }

  @Input('slope')
  set slope(value: string) {
    setAttr(this.elementRef, 'slope', value);
  }


  get stemh(): string {
    return getAttr(this.elementRef, 'stemh');
  }

  @Input('stemh')
  set stemh(value: string) {
    setAttr(this.elementRef, 'stemh', value);
  }


  get stemv(): string {
    return getAttr(this.elementRef, 'stemv');
  }

  @Input('stemv')
  set stemv(value: string) {
    setAttr(this.elementRef, 'stemv', value);
  }


  get strikethroughPosition(): string {
    return getAttr(this.elementRef, 'strikethrough-position');
  }

  @Input('strikethrough-position')
  set strikethroughPosition(value: string) {
    setAttr(this.elementRef, 'strikethrough-position', value);
  }


  get strikethroughThickness(): string {
    return getAttr(this.elementRef, 'strikethrough-thickness');
  }

  @Input('strikethrough-thickness')
  set strikethroughThickness(value: string) {
    setAttr(this.elementRef, 'strikethrough-thickness', value);
  }


  get tabindex(): string {
    return getAttr(this.elementRef, 'tabindex');
  }

  @Input('tabindex')
  set tabindex(value: string) {
    setAttr(this.elementRef, 'tabindex', value);
  }


  get underlinePosition(): string {
    return getAttr(this.elementRef, 'underline-position');
  }

  @Input('underline-position')
  set underlinePosition(value: string) {
    setAttr(this.elementRef, 'underline-position', value);
  }


  get underlineThickness(): string {
    return getAttr(this.elementRef, 'underline-thickness');
  }

  @Input('underline-thickness')
  set underlineThickness(value: string) {
    setAttr(this.elementRef, 'underline-thickness', value);
  }


  get unicodeRange(): string {
    return getAttr(this.elementRef, 'unicode-range');
  }

  @Input('unicode-range')
  set unicodeRange(value: string) {
    setAttr(this.elementRef, 'unicode-range', value);
  }


  get unitsPerEm(): string {
    return getAttr(this.elementRef, 'units-per-em');
  }

  @Input('units-per-em')
  set unitsPerEm(value: string) {
    setAttr(this.elementRef, 'units-per-em', value);
  }


  get vAlphabetic(): string {
    return getAttr(this.elementRef, 'v-alphabetic');
  }

  @Input('v-alphabetic')
  set vAlphabetic(value: string) {
    setAttr(this.elementRef, 'v-alphabetic', value);
  }


  get vHanging(): string {
    return getAttr(this.elementRef, 'v-hanging');
  }

  @Input('v-hanging')
  set vHanging(value: string) {
    setAttr(this.elementRef, 'v-hanging', value);
  }


  get vIdeographic(): string {
    return getAttr(this.elementRef, 'v-ideographic');
  }

  @Input('v-ideographic')
  set vIdeographic(value: string) {
    setAttr(this.elementRef, 'v-ideographic', value);
  }


  get vMathematical(): string {
    return getAttr(this.elementRef, 'v-mathematical');
  }

  @Input('v-mathematical')
  set vMathematical(value: string) {
    setAttr(this.elementRef, 'v-mathematical', value);
  }


  get widths(): string {
    return getAttr(this.elementRef, 'widths');
  }

  @Input('widths')
  set widths(value: string) {
    setAttr(this.elementRef, 'widths', value);
  }


  get xHeight(): string {
    return getAttr(this.elementRef, 'x-height');
  }

  @Input('x-height')
  set xHeight(value: string) {
    setAttr(this.elementRef, 'x-height', value);
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
