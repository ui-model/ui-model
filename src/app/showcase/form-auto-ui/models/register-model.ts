import { Field, Form, url } from '@ui-model/angular';
import { ProfileModel } from './profile-model';
import { Validators } from '@angular/forms';

@Form({
  label: 'User Registration',
})
export class RegisterModel {
  @Field({
    label: 'User name',
    css: 'col-md-12',
    validators: [Validators.required, Validators.minLength(3)],
  })
  username: string;

  @Field({
    validators: [Validators.required],
  })
  nickName: string;

  @Field({
    label: 'Personal email',
    validators: [Validators.required, Validators.email],
  })
  email: string;

  @Field({
    label: 'Personal mobile',
    validators: [Validators.required, Validators.pattern(/^1\d{10}$/)],
  })
  mobile: string;

  @Field({
    label: 'Home page',
    validators: [Validators.required, Validators.minLength(3), url],
  })
  homepage: string;

  @Field({
    validators: [Validators.required],
    arrayElementType: String,
  })
  tags: string[];

  @Field({
    label: '',
    validators: [Validators.requiredTrue],
  })
  agreeLicense: boolean;

  @Field({
    label: 'User profile',
    validators: [Validators.required],
  })
  profile: ProfileModel = new ProfileModel();
}
