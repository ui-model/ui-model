import { inject, TestBed } from '@angular/core/testing';

import { FormUtils } from './form-utils.service';

describe('FormUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormUtils],
    });
  });

  it('should ...', inject([FormUtils], (service: FormUtils) => {
    expect(service).toBeTruthy();
  }));
});
