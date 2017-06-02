import { Field, Form, url } from '@ui-model/angular';
import { ProfileModel } from './profile-model';
import { Validators } from '@angular/forms';
import { AgreeLicenseEditorComponent } from '../editors/agree-license-editor/agree-license-editor.component';
import { checkUnique } from './unique.validator';

@Form({
  label: 'User Registration',
})
export class RegisterModel {
  @Field({
    label: 'User name',
    css: 'col-md-12',
    validators: [Validators.required, Validators.minLength(3)],
    asyncValidators: [checkUnique],
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
    css: 'col-md-12',
    validators: [Validators.requiredTrue],
    editor: AgreeLicenseEditorComponent,
    errors: {
      required: 'Sorry, you must agree to the agreement to use the service.',
    },
  })
  agreeLicense: boolean;

  @Field({
    label: 'User profile',
    validators: [Validators.required],
  })
  profile: ProfileModel = new ProfileModel();
}
