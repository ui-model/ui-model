import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSetUsingDirectiveComponent } from './tab-set-using-directive.component';
import { UiModelModule } from '@ui-model/angular';
import { FormsModule } from '@angular/forms';

describe('TabSetUsingDirectiveComponent', () => {
  let component: TabSetUsingDirectiveComponent;
  let fixture: ComponentFixture<TabSetUsingDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabSetUsingDirectiveComponent],
      imports: [UiModelModule, FormsModule],
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
