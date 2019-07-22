import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: 'image',
})
export class SvgImageDirective {
  constructor(private elementRef: ElementRef<Element>) {
  }

    get alignmentBaseline(): string {
    return getAttr(this.elementRef, 'alignment-baseline');
  }

  @Input('alignment-baseline')
  set alignmentBaseline(value: string) {
    setAttr(this.elementRef, 'alignment-baseline', value);
  }


  get baselineShift(): string {
    return getAttr(this.elementRef, 'baseline-shift');
  }

  @Input('baseline-shift')
  set baselineShift(value: string) {
    setAttr(this.elementRef, 'baseline-shift', value);
  }


  get class(): string {
    return getAttr(this.elementRef, 'class');
  }

  @Input('class')
  set class(value: string) {
    setAttr(this.elementRef, 'class', value);
  }


  get clip(): string {
    return getAttr(this.elementRef, 'clip');
  }

  @Input('clip')
  set clip(value: string) {
    setAttr(this.elementRef, 'clip', value);
  }


  get clipPath(): string {
    return getAttr(this.elementRef, 'clip-path');
  }

  @Input('clip-path')
  set clipPath(value: string) {
    setAttr(this.elementRef, 'clip-path', value);
  }


  get clipRule(): string {
    return getAttr(this.elementRef, 'clip-rule');
  }

  @Input('clip-rule')
  set clipRule(value: string) {
    setAttr(this.elementRef, 'clip-rule', value);
  }


  get color(): string {
    return getAttr(this.elementRef, 'color');
  }

  @Input('color')
  set color(value: string) {
    setAttr(this.elementRef, 'color', value);
  }


  get colorInterpolation(): string {
    return getAttr(this.elementRef, 'color-interpolation');
  }

  @Input('color-interpolation')
  set colorInterpolation(value: string) {
    setAttr(this.elementRef, 'color-interpolation', value);
  }


  get colorInterpolationFilters(): string {
    return getAttr(this.elementRef, 'color-interpolation-filters');
  }

  @Input('color-interpolation-filters')
  set colorInterpolationFilters(value: string) {
    setAttr(this.elementRef, 'color-interpolation-filters', value);
  }


  get colorProfile(): string {
    return getAttr(this.elementRef, 'color-profile');
  }

  @Input('color-profile')
  set colorProfile(value: string) {
    setAttr(this.elementRef, 'color-profile', value);
  }


  get colorRendering(): string {
    return getAttr(this.elementRef, 'color-rendering');
  }

  @Input('color-rendering')
  set colorRendering(value: string) {
    setAttr(this.elementRef, 'color-rendering', value);
  }


  get cursor(): string {
    return getAttr(this.elementRef, 'cursor');
  }

  @Input('cursor')
  set cursor(value: string) {
    setAttr(this.elementRef, 'cursor', value);
  }


  get direction(): string {
    return getAttr(this.elementRef, 'direction');
  }

  @Input('direction')
  set direction(value: string) {
    setAttr(this.elementRef, 'direction', value);
  }


  get display(): string {
    return getAttr(this.elementRef, 'display');
  }

  @Input('display')
  set display(value: string) {
    setAttr(this.elementRef, 'display', value);
  }


  get dominantBaseline(): string {
    return getAttr(this.elementRef, 'dominant-baseline');
  }

  @Input('dominant-baseline')
  set dominantBaseline(value: string) {
    setAttr(this.elementRef, 'dominant-baseline', value);
  }


  get enableBackground(): string {
    return getAttr(this.elementRef, 'enable-background');
  }

  @Input('enable-background')
  set enableBackground(value: string) {
    setAttr(this.elementRef, 'enable-background', value);
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


  get fillOpacity(): string {
    return getAttr(this.elementRef, 'fill-opacity');
  }

  @Input('fill-opacity')
  set fillOpacity(value: string) {
    setAttr(this.elementRef, 'fill-opacity', value);
  }


  get fillRule(): string {
    return getAttr(this.elementRef, 'fill-rule');
  }

  @Input('fill-rule')
  set fillRule(value: string) {
    setAttr(this.elementRef, 'fill-rule', value);
  }


  get filter(): string {
    return getAttr(this.elementRef, 'filter');
  }

  @Input('filter')
  set filter(value: string) {
    setAttr(this.elementRef, 'filter', value);
  }


  get floodColor(): string {
    return getAttr(this.elementRef, 'flood-color');
  }

  @Input('flood-color')
  set floodColor(value: string) {
    setAttr(this.elementRef, 'flood-color', value);
  }


  get floodOpacity(): string {
    return getAttr(this.elementRef, 'flood-opacity');
  }

  @Input('flood-opacity')
  set floodOpacity(value: string) {
    setAttr(this.elementRef, 'flood-opacity', value);
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


  get fontSizeAdjust(): string {
    return getAttr(this.elementRef, 'font-size-adjust');
  }

  @Input('font-size-adjust')
  set fontSizeAdjust(value: string) {
    setAttr(this.elementRef, 'font-size-adjust', value);
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


  get glyphOrientationHorizontal(): string {
    return getAttr(this.elementRef, 'glyph-orientation-horizontal');
  }

  @Input('glyph-orientation-horizontal')
  set glyphOrientationHorizontal(value: string) {
    setAttr(this.elementRef, 'glyph-orientation-horizontal', value);
  }


  get glyphOrientationVertical(): string {
    return getAttr(this.elementRef, 'glyph-orientation-vertical');
  }

  @Input('glyph-orientation-vertical')
  set glyphOrientationVertical(value: string) {
    setAttr(this.elementRef, 'glyph-orientation-vertical', value);
  }


  get height(): string {
    return getAttr(this.elementRef, 'height');
  }

  @Input('height')
  set height(value: string) {
    setAttr(this.elementRef, 'height', value);
  }


  get href(): string {
    return getAttr(this.elementRef, 'href');
  }

  @Input('href')
  set href(value: string) {
    setAttr(this.elementRef, 'href', value);
  }


  get id(): string {
    return getAttr(this.elementRef, 'id');
  }

  @Input('id')
  set id(value: string) {
    setAttr(this.elementRef, 'id', value);
  }


  get imageRendering(): string {
    return getAttr(this.elementRef, 'image-rendering');
  }

  @Input('image-rendering')
  set imageRendering(value: string) {
    setAttr(this.elementRef, 'image-rendering', value);
  }


  get letterSpacing(): string {
    return getAttr(this.elementRef, 'letter-spacing');
  }

  @Input('letter-spacing')
  set letterSpacing(value: string) {
    setAttr(this.elementRef, 'letter-spacing', value);
  }


  get lightingColor(): string {
    return getAttr(this.elementRef, 'lighting-color');
  }

  @Input('lighting-color')
  set lightingColor(value: string) {
    setAttr(this.elementRef, 'lighting-color', value);
  }


  get markerEnd(): string {
    return getAttr(this.elementRef, 'marker-end');
  }

  @Input('marker-end')
  set markerEnd(value: string) {
    setAttr(this.elementRef, 'marker-end', value);
  }


  get markerMid(): string {
    return getAttr(this.elementRef, 'marker-mid');
  }

  @Input('marker-mid')
  set markerMid(value: string) {
    setAttr(this.elementRef, 'marker-mid', value);
  }


  get markerStart(): string {
    return getAttr(this.elementRef, 'marker-start');
  }

  @Input('marker-start')
  set markerStart(value: string) {
    setAttr(this.elementRef, 'marker-start', value);
  }


  get mask(): string {
    return getAttr(this.elementRef, 'mask');
  }

  @Input('mask')
  set mask(value: string) {
    setAttr(this.elementRef, 'mask', value);
  }


  get opacity(): string {
    return getAttr(this.elementRef, 'opacity');
  }

  @Input('opacity')
  set opacity(value: string) {
    setAttr(this.elementRef, 'opacity', value);
  }


  get overflow(): string {
    return getAttr(this.elementRef, 'overflow');
  }

  @Input('overflow')
  set overflow(value: string) {
    setAttr(this.elementRef, 'overflow', value);
  }


  get paintOrder(): string {
    return getAttr(this.elementRef, 'paint-order');
  }

  @Input('paint-order')
  set paintOrder(value: string) {
    setAttr(this.elementRef, 'paint-order', value);
  }


  get pointerEvents(): string {
    return getAttr(this.elementRef, 'pointer-events');
  }

  @Input('pointer-events')
  set pointerEvents(value: string) {
    setAttr(this.elementRef, 'pointer-events', value);
  }


  get preserveAspectRatio(): string {
    return getAttr(this.elementRef, 'preserveAspectRatio');
  }

  @Input('preserveAspectRatio')
  set preserveAspectRatio(value: string) {
    setAttr(this.elementRef, 'preserveAspectRatio', value);
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


  get shapeRendering(): string {
    return getAttr(this.elementRef, 'shape-rendering');
  }

  @Input('shape-rendering')
  set shapeRendering(value: string) {
    setAttr(this.elementRef, 'shape-rendering', value);
  }


  get stopColor(): string {
    return getAttr(this.elementRef, 'stop-color');
  }

  @Input('stop-color')
  set stopColor(value: string) {
    setAttr(this.elementRef, 'stop-color', value);
  }


  get stopOpacity(): string {
    return getAttr(this.elementRef, 'stop-opacity');
  }

  @Input('stop-opacity')
  set stopOpacity(value: string) {
    setAttr(this.elementRef, 'stop-opacity', value);
  }


  get stroke(): string {
    return getAttr(this.elementRef, 'stroke');
  }

  @Input('stroke')
  set stroke(value: string) {
    setAttr(this.elementRef, 'stroke', value);
  }


  get strokeDasharray(): string {
    return getAttr(this.elementRef, 'stroke-dasharray');
  }

  @Input('stroke-dasharray')
  set strokeDasharray(value: string) {
    setAttr(this.elementRef, 'stroke-dasharray', value);
  }


  get strokeDashoffset(): string {
    return getAttr(this.elementRef, 'stroke-dashoffset');
  }

  @Input('stroke-dashoffset')
  set strokeDashoffset(value: string) {
    setAttr(this.elementRef, 'stroke-dashoffset', value);
  }


  get strokeLinecap(): string {
    return getAttr(this.elementRef, 'stroke-linecap');
  }

  @Input('stroke-linecap')
  set strokeLinecap(value: string) {
    setAttr(this.elementRef, 'stroke-linecap', value);
  }


  get strokeLinejoin(): string {
    return getAttr(this.elementRef, 'stroke-linejoin');
  }

  @Input('stroke-linejoin')
  set strokeLinejoin(value: string) {
    setAttr(this.elementRef, 'stroke-linejoin', value);
  }


  get strokeMiterlimit(): string {
    return getAttr(this.elementRef, 'stroke-miterlimit');
  }

  @Input('stroke-miterlimit')
  set strokeMiterlimit(value: string) {
    setAttr(this.elementRef, 'stroke-miterlimit', value);
  }


  get strokeOpacity(): string {
    return getAttr(this.elementRef, 'stroke-opacity');
  }

  @Input('stroke-opacity')
  set strokeOpacity(value: string) {
    setAttr(this.elementRef, 'stroke-opacity', value);
  }


  get strokeWidth(): string {
    return getAttr(this.elementRef, 'stroke-width');
  }

  @Input('stroke-width')
  set strokeWidth(value: string) {
    setAttr(this.elementRef, 'stroke-width', value);
  }


  get style(): string {
    return getAttr(this.elementRef, 'style');
  }

  @Input('style')
  set style(value: string) {
    setAttr(this.elementRef, 'style', value);
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


  get textAnchor(): string {
    return getAttr(this.elementRef, 'text-anchor');
  }

  @Input('text-anchor')
  set textAnchor(value: string) {
    setAttr(this.elementRef, 'text-anchor', value);
  }


  get textDecoration(): string {
    return getAttr(this.elementRef, 'text-decoration');
  }

  @Input('text-decoration')
  set textDecoration(value: string) {
    setAttr(this.elementRef, 'text-decoration', value);
  }


  get textOverflow(): string {
    return getAttr(this.elementRef, 'text-overflow');
  }

  @Input('text-overflow')
  set textOverflow(value: string) {
    setAttr(this.elementRef, 'text-overflow', value);
  }


  get textRendering(): string {
    return getAttr(this.elementRef, 'text-rendering');
  }

  @Input('text-rendering')
  set textRendering(value: string) {
    setAttr(this.elementRef, 'text-rendering', value);
  }


  get transform(): string {
    return getAttr(this.elementRef, 'transform');
  }

  @Input('transform')
  set transform(value: string) {
    setAttr(this.elementRef, 'transform', value);
  }


  get unicodeBidi(): string {
    return getAttr(this.elementRef, 'unicode-bidi');
  }

  @Input('unicode-bidi')
  set unicodeBidi(value: string) {
    setAttr(this.elementRef, 'unicode-bidi', value);
  }


  get vectorEffect(): string {
    return getAttr(this.elementRef, 'vector-effect');
  }

  @Input('vector-effect')
  set vectorEffect(value: string) {
    setAttr(this.elementRef, 'vector-effect', value);
  }


  get visibility(): string {
    return getAttr(this.elementRef, 'visibility');
  }

  @Input('visibility')
  set visibility(value: string) {
    setAttr(this.elementRef, 'visibility', value);
  }


  get width(): string {
    return getAttr(this.elementRef, 'width');
  }

  @Input('width')
  set width(value: string) {
    setAttr(this.elementRef, 'width', value);
  }


  get wordSpacing(): string {
    return getAttr(this.elementRef, 'word-spacing');
  }

  @Input('word-spacing')
  set wordSpacing(value: string) {
    setAttr(this.elementRef, 'word-spacing', value);
  }


  get writingMode(): string {
    return getAttr(this.elementRef, 'writing-mode');
  }

  @Input('writing-mode')
  set writingMode(value: string) {
    setAttr(this.elementRef, 'writing-mode', value);
  }


  get x(): string {
    return getAttr(this.elementRef, 'x');
  }

  @Input('x')
  set x(value: string) {
    setAttr(this.elementRef, 'x', value);
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


  get y(): string {
    return getAttr(this.elementRef, 'y');
  }

  @Input('y')
  set y(value: string) {
    setAttr(this.elementRef, 'y', value);
  }


}
