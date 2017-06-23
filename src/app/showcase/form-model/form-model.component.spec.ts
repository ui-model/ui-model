import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModelComponent } from './form-model.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ALL_SERVICES_OF_UI_MODEL_ANGULAR, FormMaker } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';

describe('ShowcaseFormModelComponent', () => {
  let component: FormModelComponent;
  let fixture: ComponentFixture<FormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UiModelBootstrapModule,
        ReactiveFormsModule,
      ],
      declarations: [FormModelComponent],
      providers: [FormMaker, ALL_SERVICES_OF_UI_MODEL_ANGULAR],
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
