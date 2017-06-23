import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlComponent } from './form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldLabelPipe } from '@ui-model/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NameMapper } from '@ui-model/angular';

describe('FormControlComponent', () => {
  let component: FormControlComponent;
  let fixture: ComponentFixture<FormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [FormControlComponent, FieldLabelPipe],
      providers: [NameMapper],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
