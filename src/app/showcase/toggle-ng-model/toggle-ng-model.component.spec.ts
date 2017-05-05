import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleNgModelComponent } from './toggle-ng-model.component';
import { UiModelModule } from '@ui-model/angular';
import { FormsModule } from '@angular/forms';

describe('ToggleNgModelComponent', () => {
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
