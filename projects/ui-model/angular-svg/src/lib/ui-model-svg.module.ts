import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgADirective } from './directives/shim/a.directive';
import { SvgAltGlyphDefDirective } from './directives/shim/alt-glyph-def.directive';
import { SvgAltGlyphItemDirective } from './directives/shim/alt-glyph-item.directive';
import { SvgAltGlyphDirective } from './directives/shim/alt-glyph.directive';
import { SvgAnimateColorDirective } from './directives/shim/animate-color.directive';
import { SvgAnimateMotionDirective } from './directives/shim/animate-motion.directive';
import { SvgAnimateTransformDirective } from './directives/shim/animate-transform.directive';
import { SvgAnimateDirective } from './directives/shim/animate.directive';
import { SvgCircleDirective } from './directives/shim/circle.directive';
import { SvgClipPathDirective } from './directives/shim/clip-path.directive';
import { SvgColorProfileDirective } from './directives/shim/color-profile.directive';
import { SvgCursorDirective } from './directives/shim/cursor.directive';
import { SvgDefsDirective } from './directives/shim/defs.directive';
import { SvgDescDirective } from './directives/shim/desc.directive';
import { SvgEllipseDirective } from './directives/shim/ellipse.directive';
import { SvgFeBlendDirective } from './directives/shim/fe-blend.directive';
import { SvgFeColorMatrixDirective } from './directives/shim/fe-color-matrix.directive';
import { SvgFeComponentTransferDirective } from './directives/shim/fe-component-transfer.directive';
import { SvgFeCompositeDirective } from './directives/shim/fe-composite.directive';
import { SvgFeConvolveMatrixDirective } from './directives/shim/fe-convolve-matrix.directive';
import { SvgFeDiffuseLightingDirective } from './directives/shim/fe-diffuse-lighting.directive';
import { SvgFeDisplacementMapDirective } from './directives/shim/fe-displacement-map.directive';
import { SvgFeDistantLightDirective } from './directives/shim/fe-distant-light.directive';
import { SvgFeFloodDirective } from './directives/shim/fe-flood.directive';
import { SvgFeFuncADirective } from './directives/shim/fe-func-a.directive';
import { SvgFeFuncBDirective } from './directives/shim/fe-func-b.directive';
import { SvgFeFuncGDirective } from './directives/shim/fe-func-g.directive';
import { SvgFeFuncRDirective } from './directives/shim/fe-func-r.directive';
import { SvgFeGaussianBlurDirective } from './directives/shim/fe-gaussian-blur.directive';
import { SvgFeImageDirective } from './directives/shim/fe-image.directive';
import { SvgFeMergeNodeDirective } from './directives/shim/fe-merge-node.directive';
import { SvgFeMergeDirective } from './directives/shim/fe-merge.directive';
import { SvgFeMorphologyDirective } from './directives/shim/fe-morphology.directive';
import { SvgFeOffsetDirective } from './directives/shim/fe-offset.directive';
import { SvgFePointLightDirective } from './directives/shim/fe-point-light.directive';
import { SvgFeSpecularLightingDirective } from './directives/shim/fe-specular-lighting.directive';
import { SvgFeSpotLightDirective } from './directives/shim/fe-spot-light.directive';
import { SvgFeTileDirective } from './directives/shim/fe-tile.directive';
import { SvgFeTurbulenceDirective } from './directives/shim/fe-turbulence.directive';
import { SvgFilterDirective } from './directives/shim/filter.directive';
import { SvgFontFaceFormatDirective } from './directives/shim/font-face-format.directive';
import { SvgFontFaceNameDirective } from './directives/shim/font-face-name.directive';
import { SvgFontFaceSrcDirective } from './directives/shim/font-face-src.directive';
import { SvgFontFaceUriDirective } from './directives/shim/font-face-uri.directive';
import { SvgFontFaceDirective } from './directives/shim/font-face.directive';
import { SvgFontDirective } from './directives/shim/font.directive';
import { SvgForeignObjectDirective } from './directives/shim/foreign-object.directive';
import { SvgGDirective } from './directives/shim/g.directive';
import { SvgGlyphRefDirective } from './directives/shim/glyph-ref.directive';
import { SvgGlyphDirective } from './directives/shim/glyph.directive';
import { SvgHatchPathDirective } from './directives/shim/hatch-path.directive';
import { SvgHatchDirective } from './directives/shim/hatch.directive';
import { SvgHkernDirective } from './directives/shim/hkern.directive';
import { SvgImageDirective } from './directives/shim/image.directive';
import { SvgLineDirective } from './directives/shim/line.directive';
import { SvgLinearGradientDirective } from './directives/shim/linear-gradient.directive';
import { SvgMarkerDirective } from './directives/shim/marker.directive';
import { SvgMaskDirective } from './directives/shim/mask.directive';
import { SvgMeshGradientDirective } from './directives/shim/mesh-gradient.directive';
import { SvgMeshPatchDirective } from './directives/shim/mesh-patch.directive';
import { SvgMeshRowDirective } from './directives/shim/mesh-row.directive';
import { SvgMetadataDirective } from './directives/shim/metadata.directive';
import { SvgMissingGlyphDirective } from './directives/shim/missing-glyph.directive';
import { SvgMpathDirective } from './directives/shim/mpath.directive';
import { SvgPathDirective } from './directives/shim/path.directive';
import { SvgPatternDirective } from './directives/shim/pattern.directive';
import { SvgPolygonDirective } from './directives/shim/polygon.directive';
import { SvgPolylineDirective } from './directives/shim/polyline.directive';
import { SvgRadialGradientDirective } from './directives/shim/radial-gradient.directive';
import { SvgRectDirective } from './directives/shim/rect.directive';
import { SvgScriptDirective } from './directives/shim/script.directive';
import { SvgSetDirective } from './directives/shim/set.directive';
import { SvgSolidColorDirective } from './directives/shim/solid-color.directive';
import { SvgStopDirective } from './directives/shim/stop.directive';
import { SvgStyleDirective } from './directives/shim/style.directive';
import { SvgSvgDirective } from './directives/shim/svg.directive';
import { SvgSwitchDirective } from './directives/shim/switch.directive';
import { SvgSymbolDirective } from './directives/shim/symbol.directive';
import { SvgTextPathDirective } from './directives/shim/text-path.directive';
import { SvgTextDirective } from './directives/shim/text.directive';
import { SvgTitleDirective } from './directives/shim/title.directive';
import { SvgTrefDirective } from './directives/shim/tref.directive';
import { SvgTspanDirective } from './directives/shim/tspan.directive';
import { SvgUseDirective } from './directives/shim/use.directive';
import { SvgViewDirective } from './directives/shim/view.directive';
import { SvgVkernDirective } from './directives/shim/vkern.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SvgADirective,
    SvgAltGlyphDirective,
    SvgAltGlyphDefDirective,
    SvgAltGlyphItemDirective,
    SvgAnimateDirective,
    SvgAnimateColorDirective,
    SvgAnimateMotionDirective,
    SvgAnimateTransformDirective,
    SvgCircleDirective,
    SvgClipPathDirective,
    SvgColorProfileDirective,
    SvgCursorDirective,
    SvgDefsDirective,
    SvgDescDirective,
    SvgEllipseDirective,
    SvgFeBlendDirective,
    SvgFeColorMatrixDirective,
    SvgFeComponentTransferDirective,
    SvgFeCompositeDirective,
    SvgFeConvolveMatrixDirective,
    SvgFeDiffuseLightingDirective,
    SvgFeDisplacementMapDirective,
    SvgFeDistantLightDirective,
    SvgFeFloodDirective,
    SvgFeFuncADirective,
    SvgFeFuncBDirective,
    SvgFeFuncGDirective,
    SvgFeFuncRDirective,
    SvgFeGaussianBlurDirective,
    SvgFeImageDirective,
    SvgFeMergeDirective,
    SvgFeMergeNodeDirective,
    SvgFeMorphologyDirective,
    SvgFeOffsetDirective,
    SvgFePointLightDirective,
    SvgFeSpecularLightingDirective,
    SvgFeSpotLightDirective,
    SvgFeTileDirective,
    SvgFeTurbulenceDirective,
    SvgFilterDirective,
    SvgFontDirective,
    SvgFontFaceDirective,
    SvgFontFaceFormatDirective,
    SvgFontFaceNameDirective,
    SvgFontFaceSrcDirective,
    SvgFontFaceUriDirective,
    SvgForeignObjectDirective,
    SvgGDirective,
    SvgGlyphDirective,
    SvgGlyphRefDirective,
    SvgHatchDirective,
    SvgHatchPathDirective,
    SvgHkernDirective,
    SvgImageDirective,
    SvgLineDirective,
    SvgLinearGradientDirective,
    SvgMarkerDirective,
    SvgMaskDirective,
    SvgMetadataDirective,
    SvgMissingGlyphDirective,
    SvgMpathDirective,
    SvgPathDirective,
    SvgPatternDirective,
    SvgPolygonDirective,
    SvgPolylineDirective,
    SvgRadialGradientDirective,
    SvgMeshGradientDirective,
    SvgMeshRowDirective,
    SvgMeshPatchDirective,
    SvgRectDirective,
    SvgScriptDirective,
    SvgSetDirective,
    SvgSolidColorDirective,
    SvgStopDirective,
    SvgStyleDirective,
    SvgSvgDirective,
    SvgSwitchDirective,
    SvgSymbolDirective,
    SvgTextDirective,
    SvgTextPathDirective,
    SvgTitleDirective,
    SvgTrefDirective,
    SvgTspanDirective,
    SvgUseDirective,
    SvgViewDirective,
    SvgVkernDirective,
  ],
  exports: [
    SvgADirective,
    SvgAltGlyphDirective,
    SvgAltGlyphDefDirective,
    SvgAltGlyphItemDirective,
    SvgAnimateDirective,
    SvgAnimateColorDirective,
    SvgAnimateMotionDirective,
    SvgAnimateTransformDirective,
    SvgCircleDirective,
    SvgClipPathDirective,
    SvgColorProfileDirective,
    SvgCursorDirective,
    SvgDefsDirective,
    SvgDescDirective,
    SvgEllipseDirective,
    SvgFeBlendDirective,
    SvgFeColorMatrixDirective,
    SvgFeComponentTransferDirective,
    SvgFeCompositeDirective,
    SvgFeConvolveMatrixDirective,
    SvgFeDiffuseLightingDirective,
    SvgFeDisplacementMapDirective,
    SvgFeDistantLightDirective,
    SvgFeFloodDirective,
    SvgFeFuncADirective,
    SvgFeFuncBDirective,
    SvgFeFuncGDirective,
    SvgFeFuncRDirective,
    SvgFeGaussianBlurDirective,
    SvgFeImageDirective,
    SvgFeMergeDirective,
    SvgFeMergeNodeDirective,
    SvgFeMorphologyDirective,
    SvgFeOffsetDirective,
    SvgFePointLightDirective,
    SvgFeSpecularLightingDirective,
    SvgFeSpotLightDirective,
    SvgFeTileDirective,
    SvgFeTurbulenceDirective,
    SvgFilterDirective,
    SvgFontDirective,
    SvgFontFaceDirective,
    SvgFontFaceFormatDirective,
    SvgFontFaceNameDirective,
    SvgFontFaceSrcDirective,
    SvgFontFaceUriDirective,
    SvgForeignObjectDirective,
    SvgGDirective,
    SvgGlyphDirective,
    SvgGlyphRefDirective,
    SvgHatchDirective,
    SvgHatchPathDirective,
    SvgHkernDirective,
    SvgImageDirective,
    SvgLineDirective,
    SvgLinearGradientDirective,
    SvgMarkerDirective,
    SvgMaskDirective,
    SvgMetadataDirective,
    SvgMissingGlyphDirective,
    SvgMpathDirective,
    SvgPathDirective,
    SvgPatternDirective,
    SvgPolygonDirective,
    SvgPolylineDirective,
    SvgRadialGradientDirective,
    SvgMeshGradientDirective,
    SvgMeshRowDirective,
    SvgMeshPatchDirective,
    SvgRectDirective,
    SvgScriptDirective,
    SvgSetDirective,
    SvgSolidColorDirective,
    SvgStopDirective,
    SvgStyleDirective,
    SvgSvgDirective,
    SvgSwitchDirective,
    SvgSymbolDirective,
    SvgTextDirective,
    SvgTextPathDirective,
    SvgTitleDirective,
    SvgTrefDirective,
    SvgTspanDirective,
    SvgUseDirective,
    SvgViewDirective,
    SvgVkernDirective,
  ],
})
export class UiModelSvgModule {
}
