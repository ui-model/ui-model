import { Component, Input, isDevMode } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { metaKeyModel, ModelMetadata, PropertyMetadata } from '@ui-model/angular';

@Component({
  selector: 'ui-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  @Input() group: FormGroup;

  get form(): ModelMetadata {
    return this.group && this.group[metaKeyModel];
  }

  cssOf(field: PropertyMetadata): string {
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
