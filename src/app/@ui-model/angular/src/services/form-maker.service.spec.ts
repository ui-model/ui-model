import { inject, TestBed } from '@angular/core/testing';

import { FormMaker } from './form-maker.service';

class Model {
  name: string;
}

describe('FormModelBuilder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormMaker],
    });
  });

  it('should ...', inject([FormMaker], (service: FormMaker) => {
    expect(service).toBeTruthy();
  }));
});
