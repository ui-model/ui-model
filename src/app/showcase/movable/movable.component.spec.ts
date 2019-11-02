import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelModule } from '@ui-model/angular';
import { UiModelSvgModule } from '@ui-model/angular-svg';
import { MovableComponent } from './movable.component';

describe('showcase > ShowcaseMovableComponent', () => {
  let component: MovableComponent;
  let fixture: ComponentFixture<MovableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovableComponent],
      imports: [UiModelModule, UiModelSvgModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
