import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultPipe, FormMaker } from '@ui-model/angular';

import { ModalPromptComponent } from './modal-prompt.component';

describe('ModalPromptComponent', () => {
  let component: ModalPromptComponent;
  let fixture: ComponentFixture<ModalPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPromptComponent, DefaultPipe],
      providers: [FormMaker],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
