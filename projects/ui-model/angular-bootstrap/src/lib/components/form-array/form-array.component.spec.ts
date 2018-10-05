import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayComponent } from './form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldLabelPipe, FormArrayExporterDirective, NameMapper } from '@ui-model/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormArrayComponent', () => {
  let component: FormArrayComponent;
  let fixture: ComponentFixture<FormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [FormArrayComponent, FormArrayExporterDirective, FieldLabelPipe],
      providers: [NameMapper],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
