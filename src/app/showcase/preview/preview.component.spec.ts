import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelModule } from '@ui-model/angular';
import { PreviewComponent } from './preview.component';

describe('ShowcasePreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewComponent],
      imports: [UiModelModule.forRoot()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
