import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownPipe } from '@ui-model/angular-markdown';

import { MarkdownViewerComponent } from './markdown-viewer.component';

describe('MarkdownViewerComponent', () => {
  let component: MarkdownViewerComponent;
  let fixture: ComponentFixture<MarkdownViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkdownViewerComponent, MarkdownPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
