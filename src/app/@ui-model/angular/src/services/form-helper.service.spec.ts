import { TestBed, inject } from '@angular/core/testing';

import { FormHelper } from './form-helper.service';

describe('FormHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormHelper]
    });
  });

  it('should ...', inject([FormHelper], (service: FormHelper) => {
    expect(service).toBeTruthy();
  }));
});
