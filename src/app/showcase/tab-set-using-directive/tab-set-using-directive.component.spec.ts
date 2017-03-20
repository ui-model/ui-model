import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSetUsingDirectiveComponent } from './tab-set-using-directive.component';

describe('TabSetUsingDirectiveComponent', () => {
  let component: TabSetUsingDirectiveComponent;
  let fixture: ComponentFixture<TabSetUsingDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSetUsingDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSetUsingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
