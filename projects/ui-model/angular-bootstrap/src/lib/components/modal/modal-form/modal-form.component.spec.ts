import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultPipe } from '@ui-model/angular';

import { ModalFormComponent } from './modal-form.component';

describe('ModalFormComponent', () => {
  let component: ModalFormComponent;
  let fixture: ComponentFixture<ModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFormComponent, DefaultPipe],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
