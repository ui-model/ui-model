import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectBoxComponent } from './multi-select-box.component';

describe('MultiSelectBoxComponent', () => {
  let component: MultiSelectBoxComponent;
  let fixture: ComponentFixture<MultiSelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectBoxComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
