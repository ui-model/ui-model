import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { RadioGroupWithinFormComponent } from './radio-group-within-form.component';

xdescribe('RadioGroupWithinFormComponent', () => {
  let component: RadioGroupWithinFormComponent;
  let fixture: ComponentFixture<RadioGroupWithinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RadioGroupWithinFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: FormGroupDirective, useValue: { control: new FormGroup({ fieldName: new FormControl() }) } },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupWithinFormComponent);
    component = fixture.componentInstance;
    component.name = 'fieldName';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
