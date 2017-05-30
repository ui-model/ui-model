import { Field, Form, url } from '@ui-model/angular';
import { ProfileModel } from './profile-model';
import { Validators } from '@angular/forms';

@Form({
  label: 'User Registration',
})
export class RegisterModel {
  @Field({
    label: 'User Name',
    css: 'col-md-12',
    validators: [Validators.required, Validators.minLength(3)],
  })
  username: string;

  @Field({
    label: 'Personal Email',
    validators: [Validators.required, Validators.email],
  })
  email: string;

  @Field({
    label: 'Personal Mobile',
    validators: [Validators.required, Validators.pattern(/^1\d{10}$/)],
  })
  mobile: string;

  @Field({
    label: 'Home Page',
    validators: [Validators.required, Validators.minLength(3), url],
  })
  homepage: string;

  @Field({
    validators: [Validators.required],
    arrayElementType: String,
  })
  tags: string[];

  @Field({
    label: 'User Profile',
    validators: [Validators.required],
  })
  profile: ProfileModel = new ProfileModel();
}
