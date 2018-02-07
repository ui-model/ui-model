import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseControlWithinForm } from '@ui-model/angular';

@Component({
  selector: 'ui-radio-group-within-form',
  template: require('./radio-group-within-form.component.html'),
  styles: [require('./radio-group-within-form.component.scss')],
})
export class RadioGroupWithinFormComponent extends BaseControlWithinForm {
  constructor(container: ControlContainer) {
    super(container);
  }

  @Input() options: any[];
  @Input() name: string;
}
