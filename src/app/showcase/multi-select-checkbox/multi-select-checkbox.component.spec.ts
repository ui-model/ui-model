import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectCheckboxComponent } from './multi-select-checkbox.component';

describe('MultiSelectCheckboxComponent', () => {
  let component: MultiSelectCheckboxComponent;
  let fixture: ComponentFixture<MultiSelectCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
