import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelSvgModule } from '@ui-model/angular-svg';

import { D3BasicComponent } from './d3-basic.component';

describe('showcase > ShowcaseD3BasicComponent', () => {
  let component: D3BasicComponent;
  let fixture: ComponentFixture<D3BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiModelSvgModule],
      declarations: [D3BasicComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
