import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipService, UiModelModule } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { TooltipComponent } from './tooltip.component';

class MyTooltipService {
  visible = true;
  message = 'hello, world!';
  targetRect = {
    left: 0,
    top: 0,
    width: 100,
    height: 100,
  };
  measure = {
    boundingRect: {
      width: 100,
    },
  };
}

describe('showcase > ShowcaseTooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipComponent],
      imports: [
        UiModelModule.forRoot(),
        UiModelBootstrapModule.forRoot(),
      ],
      providers: [{provide: TooltipService, useClass: MyTooltipService}],
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
