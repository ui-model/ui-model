import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultPipe } from '@ui-model/angular';

import { ModalSuccessComponent } from './modal-success.component';

describe('ModalSuccessComponent', () => {
  let component: ModalSuccessComponent;
  let fixture: ComponentFixture<ModalSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSuccessComponent, DefaultPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
