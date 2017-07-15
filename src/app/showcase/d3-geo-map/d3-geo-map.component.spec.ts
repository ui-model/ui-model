import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3GeoMapComponent } from './d3-geo-map.component';

describe('D3GeoMapComponent', () => {
  let component: D3GeoMapComponent;
  let fixture: ComponentFixture<D3GeoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3GeoMapComponent ]
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
