import { TestBed, inject } from '@angular/core/testing';

import { SourceCodeService } from './source-code.service';

describe('SourceCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceCodeService]
    });
  });

  it('should ...', inject([SourceCodeService], (service: SourceCodeService) => {
    expect(service).toBeTruthy();
  }));
});
