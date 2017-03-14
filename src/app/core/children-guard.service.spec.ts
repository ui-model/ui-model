/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChildrenGuardService } from './children-guard.service';

describe('ChildrenGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildrenGuardService]
    });
  });

  it('should ...', inject([ChildrenGuardService], (service: ChildrenGuardService) => {
    expect(service).toBeTruthy();
  }));
});
