/* tslint:disable:no-unused-variable */
import { async, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModelModule } from '@ui-model/angular';
import { UiModelMarkdownModule } from '@ui-model/angular-markdown';
import { Subject } from 'rxjs/Subject';
import { MetadataService } from '../../../core/metadata.service';
import { SourceCodeService } from '../../../core/source-code.service';
import { SharedModule } from '../../../shared/shared.module';

import { SourceViewerComponent } from './source-viewer.component';

class MySourceCodeService {

}

class MyActivatedRoute {
  params = new Subject();
}

describe('showcase > SourceViewerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SourceViewerComponent],
      imports: [
        UiModelModule.forRoot(),
        UiModelMarkdownModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        SharedModule,
      ],
      providers: [
        MySourceCodeService,
        MyActivatedRoute,
        {provide: SourceCodeService, useClass: MySourceCodeService},
        {provide: ActivatedRoute, useClass: MyActivatedRoute},
        {provide: MetadataService, useValue: {}},
      ],
    })
      .compileComponents();
  }));

  it('should create', inject([MetadataService], (meta) => {
    const component = new SourceViewerComponent(meta);
    expect(component).toBeTruthy();
  }));
});
