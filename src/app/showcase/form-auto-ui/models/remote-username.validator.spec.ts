import { TestBed, inject } from '@angular/core/testing';

import { RemoteUsernameValidator } from './remote-username.validator';

describe('RemoteUsernameValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteUsernameValidator]
    });
  });

  it('should ...', inject([RemoteUsernameValidator], (service: RemoteUsernameValidator) => {
    expect(service).toBeTruthy();
  }));
});
