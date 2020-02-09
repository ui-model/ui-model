import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseControlWithinForm } from '@ui-model/angular';

@Component({
  selector: 'app-agree-license-editor',
  templateUrl: './agree-license-editor.component.html',
  styleUrls: ['./agree-license-editor.component.scss'],
})
export class AgreeLicenseEditorComponent extends BaseControlWithinForm {

  constructor(container: ControlContainer) {
    super(container);
  }

  @Input() name: string;
}
