import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './models/register-model';
import { FormMaker } from '@ui-model/angular';
import { FormGroup } from '@angular/forms';
import { ProfileModel } from './models/profile-model';

const Reflect = window['Reflect'];
@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss'],
})
export class FormModelComponent implements OnInit {

  constructor(private maker: FormMaker) {
  }

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
    this.form = this.maker.createFromModel(RegisterModel);
  }

  setValue1(): void {
    const value = new RegisterModel();
    value.username = 'demo';
    value.profile = new ProfileModel();
    value.profile.height = 60;
    this.maker.setValue(this.form, value);
  }

  setValue2(): void {
    const value = new RegisterModel();
    value.username = 'test';
    value.tags = ['1', '2', '3'];
    value.profile = new ProfileModel();
    value.profile.birthday = new Date('1901-01-01');
    this.maker.setValue(this.form, value);
  }
}
