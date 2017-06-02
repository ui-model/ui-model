import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldMetadata, FormMetadata, metaKeyForm } from '@ui-model/angular';

@Component({
  selector: 'ui-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {

  constructor() {
  }

  @Input() group: FormGroup;

  get form(): FormMetadata {
    return this.group && this.group[metaKeyForm];
  }

  ngOnInit(): void {
  }

  cssOf(field: FieldMetadata): string {
    if (!field) {
      return '';
    }
    const customCss = field.css || '';
    const autoCss = field.isControl ? 'col-md-6' : 'col-md-12';
    return [`ui-model-field-${field.name}`, autoCss, customCss].join(' ');
  }
}
