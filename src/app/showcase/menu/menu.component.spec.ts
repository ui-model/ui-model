import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { UiModelModule } from '@ui-model/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShowcaseMenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [UiModelModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
