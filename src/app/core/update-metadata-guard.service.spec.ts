import { inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MetadataService } from './metadata.service';

import { UpdateMetadataGuard } from './update-metadata-guard.service';

describe('UpdateMetadataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateMetadataGuard, {
        provide: MetadataService,
        useValue: {
          load: () => {
            return of(true);
          },
        },
      }],
    });
  });

  it('should ...', inject([UpdateMetadataGuard], (service: UpdateMetadataGuard) => {
    expect(service).toBeTruthy();
  }));
});
