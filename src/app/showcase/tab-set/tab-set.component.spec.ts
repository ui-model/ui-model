import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSetComponent } from './tab-set.component';
import { UiModelModule } from '@ui-model/angular';

describe('ShowcaseTabSetComponent', () => {
  let component: TabSetComponent;
  let fixture: ComponentFixture<TabSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabSetComponent],
      imports: [UiModelModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
