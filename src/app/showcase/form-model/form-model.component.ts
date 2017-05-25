import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './models/register-model';
import { FormModelBuilder } from '@ui-model/angular';
import { FormGroup } from '@angular/forms';

const Reflect = window['Reflect'];
@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss'],
})
export class FormModelComponent implements OnInit {

  constructor(private builder: FormModelBuilder) {
  }

  data = new RegisterModel();
  form: FormGroup;

  genders = [
    {
      id: 'male',
      label: 'Male',
    },
    {
      id: 'female',
      label: 'Female',
    },
  ];

  ngOnInit(): void {
    this.form = this.builder.buildFrom(this.data);
  }

}
