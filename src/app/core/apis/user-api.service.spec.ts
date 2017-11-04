import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { UserApi } from './user-api.service';

describe('UserApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        UserApi,
      ],
    });
  });

  it('should ...', inject([UserApi], (service: UserApi) => {
    expect(service).toBeTruthy();
  }));
});
