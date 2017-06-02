import { Component, Input, OnInit } from '@angular/core';
import { FieldMetadata } from '@ui-model/angular';
import { FormGroup } from '@angular/forms';
import { isString } from 'util';

@Component({
  selector: 'ui-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  constructor() {
    this.uniqueId = ++FormControlComponent.latestUniqueId;
  }

  uniqueId: number;

  @Input() group: FormGroup;
  @Input() field: FieldMetadata;

  ngOnInit(): void {
  }

  isCustomEditor(field: FieldMetadata): boolean {
    return field.editor instanceof Object;
  }

  isInput(field: FieldMetadata): boolean {
    return !field.editor || isString(field.editor) && field.editor !== 'textarea';
  }

  isTextArea(field: FieldMetadata): boolean {
    return field.editor === 'textarea';
  }

  static latestUniqueId: number = new Date().getTime();
}
