import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocumentViewerComponent} from './document-viewer.component';
import {SharedModule} from '../../shared/shared.module';
import {SourceCodeService} from '../../core/source-code.service';
import {RouterModule} from '@angular/router';

xdescribe('DocumentViewerComponent', () => {
  let component: DocumentViewerComponent;
  let fixture: ComponentFixture<DocumentViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentViewerComponent],
      imports: [SharedModule, RouterModule],
      providers: [SourceCodeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
