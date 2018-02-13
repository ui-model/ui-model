import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';

import { PanelComponent } from './panel.component';

describe('showcase > ShowcasePanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelComponent],
      imports: [UiModelBootstrapModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
