/* tslint:disable:no-unused-variable */
import {async, inject, TestBed} from '@angular/core/testing';

import {SourceViewerComponent} from './source-viewer.component';
import {UiModelModule} from '@ui-model/angular';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {SourceCodeService} from '../../core/source-code.service';
import {Subject} from 'rxjs/Subject';

class MySourceCodeService {

}

class MyActivatedRoute {
  params = new Subject();
}

describe('SourceViewerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SourceViewerComponent],
      imports: [UiModelModule, RouterModule],
      providers: [
        MySourceCodeService,
        MyActivatedRoute,
        {provide: SourceCodeService, useClass: MySourceCodeService},
        {provide: ActivatedRoute, useClass: MyActivatedRoute},
      ]
    })
      .compileComponents();
  }));

  it('should create', inject([MySourceCodeService, MyActivatedRoute], (sourceCode, route) => {
    const component = new SourceViewerComponent(sourceCode, route);
    expect(component).toBeTruthy();
  }));
});
