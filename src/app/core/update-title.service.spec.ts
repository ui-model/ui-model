import {inject, TestBed} from '@angular/core/testing';

import {UpdateTitleGuard} from './update-title.service';

describe('UpdateTitleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateTitleGuard]
    });
  });

  it('should ...', inject([UpdateTitleGuard], (service: UpdateTitleGuard) => {
    expect(service).toBeTruthy();
  }));
});
