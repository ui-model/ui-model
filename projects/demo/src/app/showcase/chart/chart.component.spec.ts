import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiModelModule } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { UiModelD3Module } from '@ui-model/angular-d3';
import { UiModelSvgModule } from '@ui-model/angular-svg';
import { ChartComponent } from './chart.component';

describe('showcase > ShowcaseChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartComponent],
      imports: [
        UiModelModule,
        UiModelBootstrapModule,
        UiModelD3Module,
        UiModelSvgModule,
        FormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
