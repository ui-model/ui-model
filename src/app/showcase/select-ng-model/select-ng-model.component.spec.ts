import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNgModelComponent } from './select-ng-model.component';

describe('SelectNgModelComponent', () => {
  let component: SelectNgModelComponent;
  let fixture: ComponentFixture<SelectNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
