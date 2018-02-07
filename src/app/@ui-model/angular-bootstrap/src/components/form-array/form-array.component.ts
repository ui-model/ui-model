import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropertyMetadata } from '@ui-model/angular';

@Component({
  selector: 'ui-form-array',
  template: require('./form-array.component.html'),
  styles: [require('./form-array.component.scss')],
})
export class FormArrayComponent implements OnInit {

  constructor() {
  }

  @Input() group: FormGroup;
  @Input() field: PropertyMetadata;

  ngOnInit(): void {
  }

  log(value: any[]): void {
    console.log(value);
  }
}
