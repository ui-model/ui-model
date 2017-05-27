import { TestBed, inject } from '@angular/core/testing';

import { FieldErrorFormatter } from './field-error-formatter.service';

describe('FieldErrorFormatterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldErrorFormatter]
    });
  });

  it('should ...', inject([FieldErrorFormatter], (service: FieldErrorFormatter) => {
    expect(service).toBeTruthy();
  }));
});
