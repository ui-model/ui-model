import { Model, Property } from '@ui-model/angular';

@Model()
export class FormModel {
  @Property()
  name: string;

  @Property()
  age: number;
}
