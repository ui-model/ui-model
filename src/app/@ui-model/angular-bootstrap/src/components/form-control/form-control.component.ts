import { Component, Input, OnInit } from '@angular/core';
import { FieldMetadata } from '@ui-model/angular';
import { FormGroup } from '@angular/forms';

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

  static latestUniqueId: number = new Date().getTime();
}
