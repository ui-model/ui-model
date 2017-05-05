import { inject, TestBed } from '@angular/core/testing';

import { UpdateMetadataGuard } from './update-metadata-guard.service';
import { MetadataService } from './metadata.service';
import { Observable } from 'rxjs';

describe('UpdateMetadataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateMetadataGuard, {
        provide: MetadataService,
        useValue: {
          load: () => {
            return Observable.of(true);
          },
        },
      }],
    });
  });

  it('should ...', inject([UpdateMetadataGuard], (service: UpdateMetadataGuard) => {
    expect(service).toBeTruthy();
  }));
});
