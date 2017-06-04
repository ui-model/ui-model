import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropertyMetadata, ModelMetadata, metaKeyModel } from '@ui-model/angular';

@Component({
  selector: 'ui-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {

  constructor() {
  }

  @Input() group: FormGroup;

  get form(): ModelMetadata {
    return this.group && this.group[metaKeyModel];
  }

  ngOnInit(): void {
  }

  cssOf(field: PropertyMetadata): string {
    if (!field) {
      return '';
    }
    const customCss = field.css || '';
    const autoCss = field.isControl ? 'col-md-6' : 'col-md-12';
    return [`ui-model-field-${field.name}`, autoCss, customCss].join(' ');
  }
}
