import { Component, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { PropertyMetadata } from '@ui-model/angular';
import { isString } from 'util';

@Component({
  selector: 'ui-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  constructor(public injector: Injector) {
    this.uniqueId = ++FormControlComponent.latestUniqueId;
  }

  uniqueId: number;

  @Input() group: FormGroup;
  @Input() field: PropertyMetadata;

  get control(): AbstractControl {
    if (!this.group || !this.field) {
      return;
    }
    return this.group.get(this.field.name);
  }

  ngOnInit(): void {
  }

  isCustomEditor(field: PropertyMetadata): boolean {
    return field.editor instanceof Object;
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

  static latestUniqueId: number = new Date().getTime();
}
