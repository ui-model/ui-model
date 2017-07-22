import { FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Model, Property, url } from '@ui-model/angular';
import { ProfileModel } from './profile-model';

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

  @Property([Validators.required, notTooThin])
  profile: ProfileModel;
}

export function notTooThin(c: FormGroup): ValidationErrors {
  const profile = ProfileModel.of(c.value);
  if (profile.bmi <= 18.4) {
    return {
      tooThin: true,
    };
  }
}
