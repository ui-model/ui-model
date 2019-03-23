import { Component, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { PropertyMetadata } from '@ui-model/angular';
import { isFunction, isString } from 'util';

@Component({
  selector: 'ui-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {

  get control(): AbstractControl {
    if (!this.group || !this.field) {
      return;
    }
    return this.group.get(this.field.name);
  }

  constructor(public injector: Injector) {
    this.uniqueId = ++FormControlComponent.latestUniqueId;
  }
  uniqueId: number;

  @Input() group: FormGroup;
  @Input() field: PropertyMetadata;
  @Input() readonly = false;

  ngOnInit(): void {
  }

  isCustomEditor(field: PropertyMetadata): boolean {
    return isFunction(field.editor);
  }

  isInput(field: PropertyMetadata): boolean {
    return !field.editor || isString(field.editor) && field.editor !== 'textarea';
  }

  isTextArea(field: PropertyMetadata): boolean {
    return field.editor === 'textarea';
  }

  isRequired(field: PropertyMetadata): boolean {
    return field.validators && field.validators.indexOf(Validators.required) !== -1;
  }

  isPlainText(field: PropertyMetadata): boolean {
    return field.type === String;
  }

  isNumber(field: PropertyMetadata): boolean {
    return field.type === Number;
  }

  isDate(field: PropertyMetadata): boolean {
    return field.type === Date;
  }

  isCustomViewer(field: PropertyMetadata): boolean {
    return isFunction(field.viewer);
  }
  static latestUniqueId: number = new Date().getTime();
}
