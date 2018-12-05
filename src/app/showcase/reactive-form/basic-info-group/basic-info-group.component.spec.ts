import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BasicInfoGroupComponent } from './basic-info-group.component';

describe('showcase > ShowcaseBasicInfoGroupComponent', () => {
  let component: BasicInfoGroupComponent;
  let fixture: ComponentFixture<BasicInfoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BasicInfoGroupComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoGroupComponent);
    component = fixture.componentInstance;
    component.group = new FormGroup({ age: new FormControl(0) });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
