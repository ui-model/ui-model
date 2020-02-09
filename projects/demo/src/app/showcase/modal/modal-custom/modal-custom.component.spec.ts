import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '@ui-model/angular';

import { ModalCustomComponent } from './modal-custom.component';

describe('showcase > ModalCustomComponent', () => {
  let component: ModalCustomComponent;
  let fixture: ComponentFixture<ModalCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCustomComponent],
      providers: [ModalService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
