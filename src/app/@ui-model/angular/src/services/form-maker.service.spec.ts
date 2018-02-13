import { inject, TestBed } from '@angular/core/testing';
import { isNumber, Model, Property } from '@ui-model/angular';

import { FormMaker } from './form-maker.service';

@Model()
class MyModel {
  @Property({
    label: 'User Name',
  })
  name: string;

  @Property({
    label: 'Age',
  })
  age: number;

  @Property({
    css: 'my-custom-css',
    hidden: true,
    defaultValue: new Date('2000-01-01T00:00:00.000Z'),
  })
  birthday: Date;
}

describe('FormMaker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormMaker],
    });
  });

  let service: FormMaker;

  beforeEach(inject([FormMaker], (__service__: FormMaker) => {
    service = __service__;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build metadata (basic info)', () => {
    const meta = service.buildMetadata(MyModel);
    const nameProp = meta.properties[0];
    expect(nameProp.name).toEqual('name');
    expect(nameProp.type).toEqual(String);
    expect(nameProp.label).toEqual('User Name');
  });

  it('should auto set properties for number field', () => {
    const meta = service.buildMetadata(MyModel);
    const ageProp = meta.properties[1];
    expect(ageProp.editor).toEqual('number');
    expect(ageProp.dataTypeValidators).toContain(isNumber);
  });

  it('should build metadata (advanced info)', () => {
    const meta = service.buildMetadata(MyModel);
    const birthdayProp = meta.properties[2];
    expect(birthdayProp.css).toEqual('my-custom-css');
    expect(birthdayProp.hidden).toBeTruthy();
    expect(birthdayProp.defaultValue.toISOString()).toEqual('2000-01-01T00:00:00.000Z');
  });

});
