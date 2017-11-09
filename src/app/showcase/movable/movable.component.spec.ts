import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelModule } from '@ui-model/angular';
import { MovableComponent } from './movable.component';

describe('ShowcaseMovableComponent', () => {
  let component: MovableComponent;
  let fixture: ComponentFixture<MovableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovableComponent],
      imports: [UiModelModule.forRoot()],
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
