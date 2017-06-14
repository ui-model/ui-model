import { TestBed, inject } from '@angular/core/testing';

import { UserApi } from './user-api.service';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDbService } from '../mock/mock-db.service';

describe('UserApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(MockDbService),
      ],
      providers: [UserApi]
    });
  });

  it('should ...', inject([UserApi], (service: UserApi) => {
    expect(service).toBeTruthy();
  }));
});
