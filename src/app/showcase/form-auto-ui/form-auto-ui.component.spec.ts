import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAutoUiComponent } from './form-auto-ui.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormMaker } from '@ui-model/angular';

describe('FormAutoUiComponent', () => {
  let component: FormAutoUiComponent;
  let fixture: ComponentFixture<FormAutoUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormAutoUiComponent],
      providers: [FormMaker],
      schemas: [NO_ERRORS_SCHEMA],
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
