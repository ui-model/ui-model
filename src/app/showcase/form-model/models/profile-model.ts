import { FormModel, MinValue, Null } from '@ui-model/angular';

@FormModel()
export class ProfileModel {
  @Null()
  birthday: Date;

  @Null()
  gender: string;

  @MinValue(50)
  height: number;

  @MinValue(20)
  weight: number;

  static bmiOf(profile: ProfileModel): number {
    const weight = +profile.weight;
    const height = +profile.height / 100;
    return weight / (height * height);
  }
}
