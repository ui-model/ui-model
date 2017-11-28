import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultPipe } from '@ui-model/angular';

import { ModalWarningComponent } from './modal-warning.component';

describe('ModalWarningComponent', () => {
  let component: ModalWarningComponent;
  let fixture: ComponentFixture<ModalWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalWarningComponent, DefaultPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
