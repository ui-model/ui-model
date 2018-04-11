import { Component, ElementRef, OnInit } from '@angular/core';
import { FormMaker, FormUtils } from '@ui-model/angular';
import { RegisterModel } from './models/register-model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-auto-ui',
  templateUrl: './form-auto-ui.component.html',
  styleUrls: ['./form-auto-ui.component.scss'],
})
export class FormAutoUiComponent implements OnInit {

  constructor(private maker: FormMaker, private utils: FormUtils, private elementRef: ElementRef) {
  }

  readonly = false;

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.maker.createFromModel(RegisterModel);
  }

  submit(): void {
    if (!this.form.valid) {
      this.utils.markChildrenAsDirty(this.form);
      this.utils.scrollFirstFieldErrorIntoView(this.elementRef.nativeElement);
      return;
    }

    alert('submitted');
  }
}
