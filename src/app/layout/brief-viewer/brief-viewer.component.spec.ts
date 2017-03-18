import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefViewerComponent } from './brief-viewer.component';

describe('BriefViewerComponent', () => {
  let component: BriefViewerComponent;
  let fixture: ComponentFixture<BriefViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
