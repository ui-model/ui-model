import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorComponent } from './field-error.component';
import { FieldErrorMessagePipe, ObjectToArrayPipe, SafeHtmlPipe } from '@ui-model/angular';
import { FieldErrorFormatter } from '../../../../angular/src/services/field-error-formatter.service';

describe('FieldErrorComponent', () => {
  let component: FieldErrorComponent;
  let fixture: ComponentFixture<FieldErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldErrorComponent, ObjectToArrayPipe, SafeHtmlPipe, FieldErrorMessagePipe],
      providers: [FieldErrorFormatter],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
