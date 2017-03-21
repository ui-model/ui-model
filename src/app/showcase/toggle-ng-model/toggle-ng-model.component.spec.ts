import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleNgModelComponent } from './toggle-ng-model.component';

describe('ToggleNgModelComponent', () => {
  let component: ToggleNgModelComponent;
  let fixture: ComponentFixture<ToggleNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
