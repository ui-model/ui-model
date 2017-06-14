import { inject, TestBed } from '@angular/core/testing';

import { RemoteUsernameValidator } from './remote-username.validator';
import { UserApi } from '../../../core/apis/user-api.service';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDbService } from '../../../core/mock/mock-db.service';

describe('RemoteUsernameValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(MockDbService),
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
