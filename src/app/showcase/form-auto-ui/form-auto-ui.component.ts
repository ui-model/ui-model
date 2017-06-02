import { Component, ElementRef, OnInit } from '@angular/core';
import { FormHelper, FormMaker } from '@ui-model/angular';
import { RegisterModel } from './models/register-model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-auto-ui',
  templateUrl: './form-auto-ui.component.html',
  styleUrls: ['./form-auto-ui.component.scss'],
})
export class FormAutoUiComponent implements OnInit {

  constructor(private maker: FormMaker<RegisterModel>, private helper: FormHelper, private elementRef: ElementRef) {
  }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.maker.createFromModel(RegisterModel);
  }

  submit(): void {
    if (this.form.invalid) {
      this.helper.traverseTree(this.form, (c) => c.markAsDirty({onlySelf: true}));
      this.helper.scrollFirstFieldErrorIntoView(this.elementRef.nativeElement);
      return;
    }

    alert('submitted');
  }
}
