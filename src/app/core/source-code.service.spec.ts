import { async, inject, TestBed } from '@angular/core/testing';

import { SourceCodeService } from './source-code.service';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('SourceCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        SourceCodeService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions],
        },
      ],
    });
  });

  it('should load document', async(inject([SourceCodeService, MockBackend],
    (service: SourceCodeService, backend: MockBackend) => {
      backend.connections.subscribe(connection => {
        connection.mockRespond(new Response(new ResponseOptions({body: 'abc'})));
      });
      service.loadDocument('abc', 'zh-CN').subscribe((content) => {
        expect(content).toBe('abc');
      });
    })));
});
