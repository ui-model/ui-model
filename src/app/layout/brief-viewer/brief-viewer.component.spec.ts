import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BriefViewerComponent} from './brief-viewer.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';

xdescribe('BriefViewerComponent', () => {
  let component: BriefViewerComponent;
  let fixture: ComponentFixture<BriefViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BriefViewerComponent],
      imports: [SharedModule, RouterModule],
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
