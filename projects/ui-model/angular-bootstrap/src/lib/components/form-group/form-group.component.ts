import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { metaKeyModel, ModelMetadata } from '@ui-model/angular';

@Component({
  selector: 'ui-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  @Input() group: FormGroup;
  @Input() readonly = false;

  get form(): ModelMetadata {
    return this.group && this.group[metaKeyModel];
  }
}
