import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAheadWithinFormComponent } from './type-ahead-within-form.component';

describe('TypeAheadWithinFormComponent', () => {
  let component: TypeAheadWithinFormComponent;
  let fixture: ComponentFixture<TypeAheadWithinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TypeAheadWithinFormComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAheadWithinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
