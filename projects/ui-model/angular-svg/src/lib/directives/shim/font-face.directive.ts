import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'font-face',
})
export class SvgFontFaceDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }


  get accentHeight(): number {
    return getAttr(this.elementRef, 'accent-height');
  }

  @Input('accent-height')
  set accentHeight(value: number) {
    setAttr(this.elementRef, 'accent-height', value);
  }


  get ascent(): number {
    return getAttr(this.elementRef, 'ascent');
  }

  @Input('ascent')
  set ascent(value: number) {
    setAttr(this.elementRef, 'ascent', value);
  }


  get bbox(): string {
    return getAttr(this.elementRef, 'bbox');
  }

  @Input('bbox')
  set bbox(value: string) {
    setAttr(this.elementRef, 'bbox', value);
  }


  get capHeight(): number {
    return getAttr(this.elementRef, 'cap-height');
  }

  @Input('cap-height')
  set capHeight(value: number) {
    setAttr(this.elementRef, 'cap-height', value);
  }


  get descent(): number {
    return getAttr(this.elementRef, 'descent');
  }

  @Input('descent')
  set descent(value: number) {
    setAttr(this.elementRef, 'descent', value);
  }


  get fontFamily(): string {
    return getAttr(this.elementRef, 'font-family');
  }

  @Input('font-family')
  set fontFamily(value: string) {
    setAttr(this.elementRef, 'font-family', value);
  }


  get fontSize(): string | number {
    return getAttr(this.elementRef, 'font-size');
  }

  @Input('font-size')
  set fontSize(value: string | number) {
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


  get hanging(): number {
    return getAttr(this.elementRef, 'hanging');
  }

  @Input('hanging')
  set hanging(value: number) {
    setAttr(this.elementRef, 'hanging', value);
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get ideographic(): number {
    return getAttr(this.elementRef, 'ideographic');
  }

  @Input('ideographic')
  set ideographic(value: number) {
    setAttr(this.elementRef, 'ideographic', value);
  }


  get overlinePosition(): number {
    return getAttr(this.elementRef, 'overline-position');
  }

  @Input('overline-position')
  set overlinePosition(value: number) {
    setAttr(this.elementRef, 'overline-position', value);
  }


  get overlineThickness(): number {
    return getAttr(this.elementRef, 'overline-thickness');
  }

  @Input('overline-thickness')
  set overlineThickness(value: number) {
    setAttr(this.elementRef, 'overline-thickness', value);
  }


  get panose1(): string {
    return getAttr(this.elementRef, 'panose-1');
  }

  @Input('panose-1')
  set panose1(value: string) {
    setAttr(this.elementRef, 'panose-1', value);
  }


  get slope(): number {
    return getAttr(this.elementRef, 'slope');
  }

  @Input('slope')
  set slope(value: number) {
    setAttr(this.elementRef, 'slope', value);
  }


  get stemh(): number {
    return getAttr(this.elementRef, 'stemh');
  }

  @Input('stemh')
  set stemh(value: number) {
    setAttr(this.elementRef, 'stemh', value);
  }


  get stemv(): number {
    return getAttr(this.elementRef, 'stemv');
  }

  @Input('stemv')
  set stemv(value: number) {
    setAttr(this.elementRef, 'stemv', value);
  }


  get strikethroughPosition(): number {
    return getAttr(this.elementRef, 'strikethrough-position');
  }

  @Input('strikethrough-position')
  set strikethroughPosition(value: number) {
    setAttr(this.elementRef, 'strikethrough-position', value);
  }


  get strikethroughThickness(): number {
    return getAttr(this.elementRef, 'strikethrough-thickness');
  }

  @Input('strikethrough-thickness')
  set strikethroughThickness(value: number) {
    setAttr(this.elementRef, 'strikethrough-thickness', value);
  }


  get underlinePosition(): number {
    return getAttr(this.elementRef, 'underline-position');
  }

  @Input('underline-position')
  set underlinePosition(value: number) {
    setAttr(this.elementRef, 'underline-position', value);
  }


  get underlineThickness(): number {
    return getAttr(this.elementRef, 'underline-thickness');
  }

  @Input('underline-thickness')
  set underlineThickness(value: number) {
    setAttr(this.elementRef, 'underline-thickness', value);
  }


  get unicodeRange(): string {
    return getAttr(this.elementRef, 'unicode-range');
  }

  @Input('unicode-range')
  set unicodeRange(value: string) {
    setAttr(this.elementRef, 'unicode-range', value);
  }


  get unitsPerEm(): number {
    return getAttr(this.elementRef, 'units-per-em');
  }

  @Input('units-per-em')
  set unitsPerEm(value: number) {
    setAttr(this.elementRef, 'units-per-em', value);
  }


  get widths(): string {
    return getAttr(this.elementRef, 'widths');
  }

  @Input('widths')
  set widths(value: string) {
    setAttr(this.elementRef, 'widths', value);
  }


  get xHeight(): number {
    return getAttr(this.elementRef, 'x-height');
  }

  @Input('x-height')
  set xHeight(value: number) {
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
