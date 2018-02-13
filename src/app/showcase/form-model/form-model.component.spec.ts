import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormMaker, UiModelModule } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';

import { FormModelComponent } from './form-model.component';

describe('showcase > ShowcaseFormModelComponent', () => {
  let component: FormModelComponent;
  let fixture: ComponentFixture<FormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UiModelModule.forRoot(),
        UiModelBootstrapModule,
        ReactiveFormsModule,
      ],
      declarations: [FormModelComponent],
      providers: [FormMaker],
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
