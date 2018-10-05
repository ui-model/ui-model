import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultPipe } from '@ui-model/angular';

import { ModalInfoComponent } from './modal-info.component';

describe('ModalInfoComponent', () => {
  let component: ModalInfoComponent;
  let fixture: ComponentFixture<ModalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalInfoComponent, DefaultPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
