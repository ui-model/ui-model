import { Property, Model, url } from '@ui-model/angular';
import { ProfileModel } from './profile-model';
import { Validators } from '@angular/forms';

@Model()
export class RegisterModel {
  @Property({
    validators: [Validators.required, Validators.minLength(3)],
  })
  username: string;

  @Property({
    validators: [Validators.required, Validators.email],
  })
  email: string;

  @Property({
    validators: [Validators.required, Validators.pattern(/^1\d{10}$/)],
  })
  mobile: string;

  @Property({
    validators: [Validators.required, Validators.minLength(3), url],
  })
  homepage: string;

  @Property({
    validators: [Validators.required],
    arrayElementType: String,
  })
  tags: string[];

  @Property([Validators.required])
  profile: ProfileModel;
}
