import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { FieldMetadataDirective } from '@ui-model/angular';

@Component({
  selector: 'app-gender-editor',
  templateUrl: './gender-editor.component.html',
  styleUrls: ['./gender-editor.component.scss'],
})
export class GenderEditorComponent {
  constructor(group: FormGroupDirective, public field: FieldMetadataDirective) {
    this.group = group.control;
  }

  group: FormGroup;

  get control(): AbstractControl {
    if (!this.group || !this.field) {
      return;
    }

    return this.group.get(this.field.meta.name);
  }

  options = [
    {
      id: 'male',
      label: 'Male',
    },
    {
      id: 'female',
      label: 'Female',
    },
  ];
}
