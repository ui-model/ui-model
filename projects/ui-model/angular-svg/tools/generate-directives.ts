import * as camelCase from 'camelcase';
import * as decamelize from 'decamelize';
import { readFileSync, writeFileSync } from 'fs';
import { uniq } from 'lodash';
import { flatMap } from 'tslint/lib/utils';
import { attrsGroups, elems } from './svg-defs';

function generateDirectives() {
  Object.entries(elems).forEach(([name, def]) => {
    const attrs = uniq([
      ...(def.attrs || []),
      ...flatMap((def.attrsGroups || [])
        .filter(it => !it.endsWith('Event'))
        .map(it => attrsGroups[it]), (it: string[]) => it),
    ].sort());
    const content = `import { Directive, ElementRef, Input } from '@angular/core';
import { getAttr, setAttr } from '../../utils/utils';

@Directive({
  selector: '${name}',
})
export class Svg${toPascalCase(name)}Directive {
  constructor(private elementRef: ElementRef<Element>) {
  }

${generateProperties(attrs)}

}
`;
    writeFileSync(`../src/lib/directives/shim/${decamelize(name, '-')}.directive.ts`, content, 'utf-8');
    console.log(`import { Svg${toPascalCase(name)}Directive } from './directives/shim/${decamelize(name, '-')}.directive';`);
  });
}

const xsdTypeMap = {
  'ID': 'string',
  'svg:FeatureListType': 'string',
  'svg:ExtensionListType': 'string',
  'svg:LanguageCodesType': 'string',
  'svg:ScriptType': 'string',
  'svg:ColorType': 'string',
  'svg:EnableBackgroundValueType': 'string',
  'svg:SVGColorType': 'string',
  'svg:OpacityValueType': 'string | number',
  'svg:PaintType': 'string',
  'svg:ClipFillRuleType': 'string',
  'svg:StrokeDashArrayValueType': 'string',
  'svg:StrokeDashOffsetValueType': 'string | number',
  'svg:StrokeMiterLimitValueType': 'string | number',
  'svg:StrokeWidthValueType': 'string | number',
  'svg:FontFamilyValueType': 'string',
  'svg:FontSizeValueType': 'string | number',
  'svg:FontSizeAdjustValueType': 'string | number',
  'svg:ClipPathValueType': 'string',
  'svg:CursorValueType': 'string',
  'svg:FilterValueType': 'string',
  'svg:MaskValueType': 'string',
  'svg:MarkerValueType': 'string',
  'svg:BaselineShiftValueType': 'string | number',
  'svg:GlyphOrientationHorizontalValueType': 'string | number',
  'svg:GlyphOrientationVerticalValueType': 'string | number',
  'svg:SpacingValueType': 'string | number',
  'svg:TextDecorationValueType': 'string',
  'svg:ClipValueType': 'string',
  'svg:CoordinateType': 'string | number',
  'svg:LengthType': 'string | number',
  'string': 'string',
  'double': 'number',
  'boolean': 'boolean',
  'svg:ClassListType': 'string',
  'svg:StyleSheetType': 'string',
  'svg:ViewBoxSpecType': 'string',
  'svg:PreserveAspectRatioSpecType': 'string',
  'svg:ContentTypeType': 'string',
  'svg:TransformListType': 'string',
  'svg:MediaDescType': 'string',
  'svg:PathDataType': 'string',
  'svg:PointsType': 'string',
  'svg:CoordinatesType': 'string',
  'svg:LengthsType': 'string | number',
  'integer': 'number',
  'NMTOKEN': 'string',
};

const typeMap = readPropertyTypes();

function writePropertyTypesMap(map: Record<string, string>): void {
  const types = Object.entries(map).map(([name, type]) => {
    return `  '${name}': ${type};`;
  }).join('\n');
  const content = `export interface AttributeTypeMap {
${types}
}
`;
  writeFileSync('../src/lib/utils/attribute-type-map.ts', content, 'utf-8');
}

writePropertyTypesMap(typeMap);

generateDirectives();

function generateProperties(attrs: string[]): string {
  return attrs
    .filter(name => !!typeMap[name])
    .map(name => {
      const type = typeMap[name];
      return `
  get ${toCamelCase(name)}(): ${type} {
    return getAttr(this.elementRef, '${name}');
  }

  @Input('${name}')
  set ${toCamelCase(name)}(value: ${type}) {
    setAttr(this.elementRef, '${name}', value);
  }`;
    }).join('\n\n');
}

function readPropertyTypes(): Record<string, string> {
  const xsd = readFileSync('./SVG.xsd', 'utf-8');
  const result = {};
  xsd.replace(/<attribute (?:name|ref)="(.*?)"/gi, (_, $1) => {
    result[$1] = 'string';
    return '';
  });

  xsd.replace(/<attribute (?:name|ref)="(.*?)" type="(.*?)"/gi, (_, $1, $2) => {
    result[$1] = xsdTypeMap[$2] || 'string';
    return '';
  });
  return result;
}

function toPascalCase(name: string): string {
  return camelCase(baseName(name), { pascalCase: true });
}

function toCamelCase(name: string): string {
  return camelCase(baseName(name));
}

function baseName(name: string): string {
  return camelCase(name.replace(/(\w+):(\w+)/, '$1-$2'));
}
