import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupComponent } from './form-group.component';
import { FieldLabelPipe } from '@ui-model/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NameMapper } from '@ui-model/angular';

describe('FormGroupComponent', () => {
  let component: FormGroupComponent;
  let fixture: ComponentFixture<FormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormGroupComponent, FieldLabelPipe],
      providers: [NameMapper],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
