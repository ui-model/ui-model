import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiModelSvgModule } from '@ui-model/angular-svg';

import { D3GaugeComponent } from './d3-gauge.component';

describe('showcase > D3GaugeComponent', () => {
  let component: D3GaugeComponent;
  let fixture: ComponentFixture<D3GaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, UiModelSvgModule],
      declarations: [D3GaugeComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
