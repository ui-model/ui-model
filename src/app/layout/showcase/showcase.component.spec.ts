import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowcaseComponent} from './showcase.component';
import {BriefViewerComponent} from '../brief-viewer/brief-viewer.component';
import {DocumentViewerComponent} from '../document-viewer/document-viewer.component';
import {SourceViewerComponent} from '../source-viewer/source-viewer.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';

xdescribe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, SharedModule, FormsModule],
      declarations: [ShowcaseComponent, BriefViewerComponent, DocumentViewerComponent, SourceViewerComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
