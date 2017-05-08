import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoGroupComponent } from './basic-info-group.component';

describe('BasicInfoGroupComponent', () => {
  let component: BasicInfoGroupComponent;
  let fixture: ComponentFixture<BasicInfoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInfoGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
