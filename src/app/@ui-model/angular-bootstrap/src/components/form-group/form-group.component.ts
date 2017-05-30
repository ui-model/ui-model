import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMetadata, metaKeyForm } from '@ui-model/angular';

@Component({
  selector: 'ui-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {

  constructor() {
  }

  @Input() group: FormGroup;

  get meta(): FormMetadata {
    return this.group && this.group[metaKeyForm];
  }

  ngOnInit(): void {
  }

}
