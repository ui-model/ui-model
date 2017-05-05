import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDetailsComponent } from './toggle-details.component';
import { UiModelModule } from '@ui-model/angular';

describe('ToggleDetailsComponent', () => {
  let component: ToggleDetailsComponent;
  let fixture: ComponentFixture<ToggleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleDetailsComponent],
      imports: [UiModelModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
