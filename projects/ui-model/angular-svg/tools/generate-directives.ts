import * as camelCase from 'camelcase';
import * as decamelize from 'decamelize';
import { writeFileSync } from 'fs';
import { uniq } from 'lodash';
import { flatMap } from 'tslint/lib/utils';
import { attrsGroups, elems } from './svg-defs';

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

  ${properties(attrs)}

}
`;
  writeFileSync(`../src/lib/directives/shim/${decamelize(name, '-')}.directive.ts`, content, 'utf-8');
  console.log(`import { Svg${toPascalCase(name)}Directive } from './directives/shim/${decamelize(name, '-')}.directive';`);
});

function properties(attrs: string[]): string {
  return attrs.map(name => `  get ${toCamelCase(name)}(): string {
    return getAttr(this.elementRef, '${name}');
  }

  @Input('${name}')
  set ${toCamelCase(name)}(value: string) {
    setAttr(this.elementRef, '${name}', value);
  }
`).join('\n\n');
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
