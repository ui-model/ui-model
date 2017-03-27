import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleImagesComponent } from './toggle-images.component';
import {UiModelModule} from '@ui-model/angular';

describe('ToggleImagesComponent', () => {
  let component: ToggleImagesComponent;
  let fixture: ComponentFixture<ToggleImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleImagesComponent ],
      imports: [UiModelModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
