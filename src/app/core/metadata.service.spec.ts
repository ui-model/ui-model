import { inject, TestBed } from '@angular/core/testing';

import { MetadataService } from './metadata.service';
import { SourceCodeService } from './source-code.service';
import { Observable } from 'rxjs/Observable';
import { Metadata } from '../utils/meta-data';

class MySourceCodeService {
  loadFile(name: string, ext: string): Observable<string> {
    return Observable.of(`content of ${name}.${ext}`);
  }

  loadDocument(name: string, locale: string = 'en-US'): Observable<string> {
    return Observable.of(`content of ${name}.${locale}.md`);
  }
}
describe('MetadataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MetadataService,
        {provide: SourceCodeService, useClass: MySourceCodeService},
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
