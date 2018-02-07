import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { metaKeyModel, ModelMetadata } from '@ui-model/angular';

@Component({
  selector: 'ui-form-group',
  template: require('./form-group.component.html'),
  styles: [require('./form-group.component.scss')],
})
export class FormGroupComponent {
  @Input() group: FormGroup;

  get form(): ModelMetadata {
    return this.group && this.group[metaKeyModel];
  }
}
