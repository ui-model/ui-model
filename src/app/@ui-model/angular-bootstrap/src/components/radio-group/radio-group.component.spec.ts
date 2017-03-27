/* tslint:disable:no-unused-variable */
import {RadioGroupComponent} from './radio-group.component';
import {ComponentFixture, async, TestBed} from '@angular/core/testing';

describe('RadioGroupComponent', () => {
  let component: RadioGroupComponent<boolean>;
  let fixture: ComponentFixture<RadioGroupComponent<boolean>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
