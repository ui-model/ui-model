import { Custom, Email, FormModel, MinLength, Null, Pattern, Required } from '@ui-model/angular';
import { ProfileModel } from './profile-model';
import { FormGroup } from '@angular/forms';

@FormModel()
export class RegisterModel {
  @Required()
  @MinLength(3)
  username: string;

  @Required()
  @Email()
  email: string;

  @Required()
  @Pattern(/^1\d{10}$/)
  mobile: string;

  @Null()
  @Custom((c: FormGroup) => {
    const profile = c.value as ProfileModel;
    if (ProfileModel.bmiOf(profile) <= 18.4) {
      return {
        tooThin: true,
      };
    }
  })
  profile: ProfileModel;
}
