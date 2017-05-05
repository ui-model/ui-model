/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipComponent } from './tooltip.component';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { TooltipService } from '@ui-model/angular';

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
describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipComponent],
      imports: [UiModelBootstrapModule],
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
