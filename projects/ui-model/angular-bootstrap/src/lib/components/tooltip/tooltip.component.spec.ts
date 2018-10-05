/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipService, UiModelModule } from '@ui-model/angular';
import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipComponent],
      imports: [UiModelModule.forRoot()],
      providers: [TooltipService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
