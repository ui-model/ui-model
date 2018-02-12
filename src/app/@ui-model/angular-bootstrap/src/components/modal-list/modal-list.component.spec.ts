import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListComponent } from './modal-list.component';

describe('ModalListComponent', () => {
  let component: ModalListComponent;
  let fixture: ComponentFixture<ModalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalListComponent],
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
