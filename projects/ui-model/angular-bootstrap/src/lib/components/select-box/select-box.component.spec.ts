import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxComponent } from './select-box.component';

describe('SelectBoxComponent', () => {
  let component: SelectBoxComponent<any>;
  let fixture: ComponentFixture<SelectBoxComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectBoxComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
