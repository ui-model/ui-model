import { Field, Form, minValue } from '@ui-model/angular';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Form({
  validators: [notTooThin],
})
export class ProfileModel {
  @Field()
  birthday: Date;

  @Field()
  gender: string;

  @Field({
    validators: [minValue(50)],
  })
  height: number;

  @Field({
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
