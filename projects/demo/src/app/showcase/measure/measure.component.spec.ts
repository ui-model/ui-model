import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiModelModule } from '@ui-model/angular';
import { UiModelSvgModule } from '@ui-model/angular-svg';

import { MeasureComponent } from './measure.component';

describe('MeasureComponent', () => {
  let component: MeasureComponent;
  let fixture: ComponentFixture<MeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, UiModelModule, UiModelSvgModule],
      declarations: [MeasureComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
