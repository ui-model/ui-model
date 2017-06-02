import { TestBed, inject } from '@angular/core/testing';

import { UserApi } from './user-api.service';

describe('UserApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserApi]
    });
  });

  it('should ...', inject([UserApi], (service: UserApi) => {
    expect(service).toBeTruthy();
  }));
});
