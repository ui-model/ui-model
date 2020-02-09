import { inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Metadata } from '../utils/meta-data';

import { MetadataService } from './metadata.service';
import { SourceCodeService } from './source-code.service';

class MySourceCodeService {
  loadFile(name: string, ext: string): Observable<string> {
    return of(`content of ${name}.${ext}`);
  }

  loadDocument(name: string, locale: string = 'en-US'): Observable<string> {
    return of(`content of ${name}.${locale}.md`);
  }
}

describe('MetadataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MetadataService,
        { provide: SourceCodeService, useClass: MySourceCodeService },
      ],
    });
  });

  it('should create', inject([MetadataService], (service: MetadataService) => {
    expect(service).toBeTruthy();
    service.load('id', new Metadata()).subscribe(() => {
      expect(service.id).toBe('id');
      expect(service.document).toBe('content of id.en-US.md');
    });
  }));
});
