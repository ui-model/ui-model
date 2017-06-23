import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonComponent } from './radio-button.component';
import { UiModelModule } from '@ui-model/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShowcaseRadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonComponent],
      imports: [UiModelModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
