import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3GeoMapComponent } from './d3-geo-map.component';
import { ALL_SERVICES_OF_UI_MODEL_D3, UiModelD3Module } from '@ui-model/angular-d3';

describe('D3GeoMapComponent', () => {
  let component: D3GeoMapComponent;
  let fixture: ComponentFixture<D3GeoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiModelD3Module],
      declarations: [D3GeoMapComponent],
      providers: [ALL_SERVICES_OF_UI_MODEL_D3],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GeoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
