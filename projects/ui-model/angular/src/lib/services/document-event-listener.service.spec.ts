import { TestBed } from '@angular/core/testing';

import { DocumentEventListener } from './document-event-listener.service';

describe('DocumentEventListener', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentEventListener = TestBed.get(DocumentEventListener);
    expect(service).toBeTruthy();
  });
});
