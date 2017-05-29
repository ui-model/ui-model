import { Field, Form, url } from '@ui-model/angular';
import { ProfileModel } from './profile-model';
import { Validators } from '@angular/forms';

@Form()
export class RegisterModel {
  @Field({
    validators: [Validators.required, Validators.minLength(3)],
  })
  username: string;

  @Field({
    validators: [Validators.required, Validators.email],
  })
  email: string;

  @Field({
    validators: [Validators.required, Validators.pattern(/^1\d{10}$/)],
  })
  mobile: string;

  @Field({
    validators: [Validators.required, Validators.minLength(3), url],
  })
  homepage: string;

  @Field({
    validators: [Validators.required],
    arrayElementType: String,
  })
  tags: string[];

  @Field([Validators.required])
  profile: ProfileModel;
}
