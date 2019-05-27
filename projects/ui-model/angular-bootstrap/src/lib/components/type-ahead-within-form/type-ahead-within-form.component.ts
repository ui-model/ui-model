import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseControlWithinForm } from '@ui-model/angular';

@Component({
  selector: 'ui-type-ahead-within-form',
  templateUrl: './type-ahead-within-form.component.html',
  styleUrls: ['./type-ahead-within-form.component.scss'],
})
export class TypeAheadWithinFormComponent extends BaseControlWithinForm {

  constructor(container: ControlContainer) {
    super(container);
  }

  @Input() options: any[];
  @Input() name: string;
}

