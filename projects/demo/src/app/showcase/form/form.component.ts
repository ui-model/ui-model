import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormUtils } from '@ui-model/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  constructor(private utils: FormUtils) {
  }

  user = { username: '', email: '' };
  report: string;

  submit(form: NgForm): void {
    if (!form.valid) {
      this.utils.traverseTree(form.control, (control) => control.markAsDirty({ onlySelf: true }));
      return;
    }
    this.report = form.value;
  }

  reset(form: NgForm): void {
    form.resetForm();
    this.report = undefined;
  }
}
