/* tslint:disable:no-unused-variable */
import { async, inject, TestBed } from '@angular/core/testing';

import { SourceViewerComponent } from './source-viewer.component';
import { UiModelModule } from '@ui-model/angular';
import { ActivatedRoute } from '@angular/router';
import { SourceCodeService } from '../../core/source-code.service';
import { Subject } from 'rxjs/Subject';
import { FormsModule } from '@angular/forms';
import { MetadataService } from '../../core/metadata.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';

class MySourceCodeService {

}

class MyActivatedRoute {
  params = new Subject();
}

describe('SourceViewerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SourceViewerComponent],
      imports: [UiModelModule, RouterTestingModule, FormsModule, SharedModule],
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
