import { Component, Input, OnInit } from '@angular/core';
import { PropertyMetadata } from '@ui-model/angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
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
