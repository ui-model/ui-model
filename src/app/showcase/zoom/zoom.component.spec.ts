import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelModule } from '@ui-model/angular';
import { ZoomComponent } from './zoom.component';

describe('ShowcaseZoomComponent', () => {
  let component: ZoomComponent;
  let fixture: ComponentFixture<ZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomComponent],
      imports: [UiModelModule.forRoot()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
