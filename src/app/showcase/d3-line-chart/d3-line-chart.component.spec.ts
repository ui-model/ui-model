import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3LineChartComponent } from './d3-line-chart.component';
import { D3ColorsPipe } from '../../@ui-model/angular-d3/src/pipes/d3-colors.pipe';
import { SharedModule } from '../../shared/shared.module';

describe('D3LineChartComponent', () => {
  let component: D3LineChartComponent;
  let fixture: ComponentFixture<D3LineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [D3LineChartComponent, D3ColorsPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
