export class UserModel {
  username: string;

  static of(rawData: any): UserModel {
    if (!rawData) {
      return;
    }
    const result = new UserModel();

    Object.assign(result, rawData);


    return result;
  }

  static from(rawData: any[] = []): UserModel[] {
    return rawData.map(UserModel.of);
  }

}
