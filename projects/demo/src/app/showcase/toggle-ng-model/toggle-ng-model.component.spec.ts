import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiModelModule } from '@ui-model/angular';
import { ToggleNgModelComponent } from './toggle-ng-model.component';

describe('showcase > ShowcaseToggleNgModelComponent', () => {
  let component: ToggleNgModelComponent;
  let fixture: ComponentFixture<ToggleNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleNgModelComponent],
      imports: [UiModelModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
