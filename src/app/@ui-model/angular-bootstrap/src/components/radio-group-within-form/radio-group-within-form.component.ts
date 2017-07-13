import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-radio-group-within-form-group',
  templateUrl: './radio-group-within-form.component.html',
  styleUrls: ['./radio-group-within-form.component.scss'],
})
export class RadioGroupWithinFormComponent {
  constructor(group: FormGroupDirective) {
    this.group = group.control;
  }

  group: FormGroup;

  get control(): AbstractControl {
    if (!this.group || !this.name) {
      return;
    }

    return this.group.get(this.name);
  }

  @Input() options: any[];
  @Input() name: string;
}
