import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BasicComponent } from './d3-basic.component';

describe('D3BasicComponent', () => {
  let component: D3BasicComponent;
  let fixture: ComponentFixture<D3BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [D3BasicComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
