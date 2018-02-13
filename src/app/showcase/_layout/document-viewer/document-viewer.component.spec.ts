import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MetadataService } from '../../../core/metadata.service';

import { DocumentViewerComponent } from './document-viewer.component';

describe('showcase > DocumentViewerComponent', () => {
  let component: DocumentViewerComponent;
  let fixture: ComponentFixture<DocumentViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentViewerComponent],
      providers: [
        {provide: MetadataService, useValue: {document: 'doc'}},
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach((done) => {
    fixture = TestBed.createComponent(DocumentViewerComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
    fixture.whenStable().then(done);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not render alert if has document', () => {
    expect(fixture.debugElement.query(By.css('.alert'))).toBeNull();
  });
});
