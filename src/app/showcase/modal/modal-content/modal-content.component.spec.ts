import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalContentComponent } from './modal-content.component';
import { CountDownDirective } from '@ui-model/angular';

describe('ShowcaseModalContentComponent', () => {
  let component: ModalContentComponent;
  let fixture: ComponentFixture<ModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalContentComponent, CountDownDirective],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
