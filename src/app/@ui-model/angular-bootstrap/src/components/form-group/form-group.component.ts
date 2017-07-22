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
}
