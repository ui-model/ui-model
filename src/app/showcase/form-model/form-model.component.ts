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

  constructor(private maker: FormMaker<RegisterModel>) {
  }

  value = new RegisterModel();
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
    this.value.username = 'test';
    this.value.tags = ['1', '2', '3'];
    this.value.profile = new ProfileModel();
    this.value.profile.birthday = new Date('1901-01-01');
    this.form = this.maker.createFromValue(this.value);
  }

  setValue(): void {
    const value = new RegisterModel();
    value.username = 'demo';
    value.profile = new ProfileModel();
    value.profile.height = 60;
    this.maker.setValue(this.form, value);
  }
}
