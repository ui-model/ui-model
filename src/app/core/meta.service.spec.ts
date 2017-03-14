/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MetaService } from './meta.service';

describe('MetaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaService]
    });
  });

  it('should ...', inject([MetaService], (service: MetaService) => {
    expect(service).toBeTruthy();
  }));
});
