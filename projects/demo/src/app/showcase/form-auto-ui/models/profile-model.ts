import { Validators } from '@angular/forms';
import { minValue, Model, Property } from '@ui-model/angular';
import { RadioGroupWithinFormComponent } from '@ui-model/angular-bootstrap';

const genderOptions = [
  {
    id: 'male',
    label: 'Male',
  },
  {
    id: 'female',
    label: 'Female',
  },
];

@Model({
  updateOn: 'blur',
})
export class ProfileModel {
  @Property()
  birthday: Date;

  @Property({
    editor: RadioGroupWithinFormComponent,
    editorInputs: { options: genderOptions },
    validators: [Validators.required],
  })
  gender: string;

  @Property({
    validators: [minValue(50)],
  })
  height: number;

  @Property({
    validators: [minValue(20)],
    viewerInputs: { format: '1.2' },
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
