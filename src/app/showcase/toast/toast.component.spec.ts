import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastService } from '@ui-model/angular';

import { ToastComponent } from './toast.component';

describe('showcase > ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToastComponent],
      providers: [ToastService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
