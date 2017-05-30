import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAutoUiComponent } from './form-auto-ui.component';

describe('FormAutoUiComponent', () => {
  let component: FormAutoUiComponent;
  let fixture: ComponentFixture<FormAutoUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAutoUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAutoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
