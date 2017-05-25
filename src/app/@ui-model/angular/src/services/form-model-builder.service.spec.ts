import { inject, TestBed } from '@angular/core/testing';

import { FormModelBuilder } from './form-model-builder.service';

describe('FormModelBuilder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormModelBuilder],
    });
  });

  it('should ...', inject([FormModelBuilder], (service: FormModelBuilder) => {
    expect(service).toBeTruthy();
  }));
});
