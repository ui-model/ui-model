import { TestBed } from '@angular/core/testing';

import { WindowMeasureService } from './window-measure.service';

describe('WindowMeasureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowMeasureService = TestBed.get(WindowMeasureService);
    expect(service).toBeTruthy();
  });
});
