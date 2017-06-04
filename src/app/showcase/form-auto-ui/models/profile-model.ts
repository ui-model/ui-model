import { Property, Model, minValue } from '@ui-model/angular';
import { FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { GenderEditorComponent } from '../editors/gender-editor/gender-editor.component';

@Model({
  label: 'Profile',
  validators: [notTooThin],
})
export class ProfileModel {
  @Property()
  birthday: Date;

  @Property({
    editor: GenderEditorComponent,
    validators: [Validators.required],
  })
  gender: string;

  @Property({
    validators: [minValue(50)],
  })
  height: number;

  @Property({
    validators: [minValue(20)],
  })
  weight: number;

  get bmi(): number {
    const weight = +this.weight;
    const height = +this.height / 100;
    return weight / (height * height);
  }

  static of(rawData: any): ProfileModel {
    if (!rawData) {
      return;
    }
    const result = new ProfileModel();

    Object.assign(result, rawData);

    return result;
  }

  static from(rawData: any[] = []): ProfileModel[] {
    return rawData.map(ProfileModel.of);
  }

}

export function notTooThin(c: FormGroup): ValidationErrors {
  const profile = ProfileModel.of(c.value);
  if (profile.bmi <= 18.4) {
    return {
      tooThin: true,
    };
  }
}
