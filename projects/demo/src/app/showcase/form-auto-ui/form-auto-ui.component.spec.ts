import { ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormMaker, FormUtils } from '@ui-model/angular';

import { FormAutoUiComponent } from './form-auto-ui.component';

describe('showcase > ShowcaseFormAutoUiComponent', () => {
  let component: FormAutoUiComponent;
  let fixture: ComponentFixture<FormAutoUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormAutoUiComponent],
      providers: [
        FormMaker,
        FormUtils,
        { provide: ElementRef, useValue: { nativeElement: Document } },
      ],
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
