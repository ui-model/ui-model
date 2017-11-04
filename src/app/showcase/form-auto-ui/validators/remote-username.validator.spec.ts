import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { UserApi } from '../../../core/apis/user-api.service';

import { RemoteUsernameValidator } from './remote-username.validator';

describe('RemoteUsernameValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        RemoteUsernameValidator,
        UserApi,
      ],
    });
  });

  it('should ...', inject([RemoteUsernameValidator], (service: RemoteUsernameValidator) => {
    expect(service).toBeTruthy();
  }));
});
