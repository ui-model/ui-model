import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3Component } from './d3.component';

describe('D3Component', () => {
  let component: D3Component;
  let fixture: ComponentFixture<D3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
