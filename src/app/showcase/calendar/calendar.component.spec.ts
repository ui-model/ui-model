import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';
import { FormsModule } from '@angular/forms';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UiModelModule } from '@ui-model/angular';

describe('ShowcaseCalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent],
      imports: [FormsModule, UiModelBootstrapModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [...UiModelModule.services],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
