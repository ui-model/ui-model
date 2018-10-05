import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicComponentInputsDirective, ModalService } from '@ui-model/angular';

import { ModalListComponent } from './modal-list.component';

describe('ModalListComponent', () => {
  let component: ModalListComponent;
  let fixture: ComponentFixture<ModalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalListComponent,
        DynamicComponentInputsDirective,
      ],
      providers: [ModalService],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
