import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModelComponent } from './form-model.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormModelBuilder } from '@ui-model/angular';
import { RadioGroupComponent } from '@ui-model/angular-bootstrap';

describe('FormModelComponent', () => {
  let component: FormModelComponent;
  let fixture: ComponentFixture<FormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [FormModelComponent, RadioGroupComponent],
      providers: [FormModelBuilder],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
