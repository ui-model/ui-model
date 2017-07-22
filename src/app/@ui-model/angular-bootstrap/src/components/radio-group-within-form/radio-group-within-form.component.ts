import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseControlWithinForm } from '@ui-model/angular';

@Component({
  selector: 'app-radio-group-within-form-group',
  templateUrl: './radio-group-within-form.component.html',
  styleUrls: ['./radio-group-within-form.component.scss'],
})
export class RadioGroupWithinFormComponent extends BaseControlWithinForm {
  constructor(container: ControlContainer) {
    super(container);
  }

  @Input() options: any[];
  @Input() name: string;
}
