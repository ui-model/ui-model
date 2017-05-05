/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';
import { TooltipService } from './tooltip.service';

describe('TooltipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TooltipService],
    });
  });

  it('should create instance', inject([TooltipService], (service: TooltipService) => {
    expect(service).toBeTruthy();
  }));
});
