import { isDevMode, Pipe, PipeTransform } from '@angular/core';
import { PropertyMetadata } from '@ui-model/angular';

@Pipe({
  name: 'fieldCss',
})
export class FieldCssPipe implements PipeTransform {

  transform(field: PropertyMetadata): string {
    if (!field) {
      return '';
    }
    const cssList = ['ui-model-field', `ui-model-field-${field.name}`];
    if (field.css) {
      if (isDevMode()) {
        console.warn('You specified a custom css, so I no longer automatically add `col-md-*` class.');
      }
      cssList.push(field.css);
    } else {
      if (field.isGroup || field.isArray) {
        cssList.push('col-md-12');
      } else {
        cssList.push('col-md-6');
      }
    }
    return cssList.join(' ');
  }

}
