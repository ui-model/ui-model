import { complexity, Model, Property, url } from '@ui-model/angular';
import { ProfileModel } from './profile-model';
import { AbstractControl, Validators } from '@angular/forms';
import { AgreeLicenseEditorComponent } from '../editors/agree-license-editor/agree-license-editor.component';
import { RemoteUsernameValidator } from '../validators/remote-username.validator';

@Model({
  label: 'User Registration',
})
export class RegisterModel {
  @Property({
    label: 'User name',
    css: 'uppercase',
    validators: [Validators.required, Validators.minLength(3)],
    asyncValidators: [RemoteUsernameValidator],
  })
  username: string;

  @Property({
    validators: [Validators.required],
  })
  nickName: string;

  @Property({
    label: 'Personal email',
    validators: [Validators.required, Validators.email],
  })
  email: string;

  @Property({
    label: 'Personal mobile',
    validators: [Validators.required, Validators.pattern(/^1\d{10}$/)],
  })
  mobile: string;

  @Property({
    label: 'Home page',
    validators: [Validators.required, Validators.minLength(3), url],
  })
  homepage: string;

  @Property({
    validators: [Validators.required],
    arrayElementType: String,
  })
  tags: string[];

  @Property({
    label: '',
    validators: [Validators.requiredTrue],
    editor: AgreeLicenseEditorComponent,
    errors: {
      required: 'Sorry, you must agree to the agreement to use the service.',
    },
  })
  agreeLicense: boolean;

  @Property({
    editor: 'password',
    validators: [Validators.required, complexity(3)],
    listeners: [(c: AbstractControl) => {
      c.parent.get('confirmPassword').updateValueAndValidity();
    }],
  })
  password: string;

  @Property({
    editor: 'password',
    validators: [Validators.required, (c: AbstractControl) => {
      if (c.parent.value.password !== c.value) {
        return {
          confirmPassword: true,
        };
      }
    }],
  })
  confirmPassword: string;

  @Property({
    label: 'User profile',
    validators: [Validators.required],
  })
  profile: ProfileModel = new ProfileModel();
}
