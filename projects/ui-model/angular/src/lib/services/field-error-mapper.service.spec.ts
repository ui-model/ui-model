import { inject, TestBed } from '@angular/core/testing';

import { FieldErrorMapper } from './field-error-mapper.service';

describe('FieldErrorMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldErrorMapper],
    });
  });

  it('should ...', inject([FieldErrorMapper], (service: FieldErrorMapper) => {
    expect(service).toBeTruthy();
  }));
});
