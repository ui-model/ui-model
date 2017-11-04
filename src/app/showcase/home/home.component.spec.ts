import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SourceCodeService } from '../../core/source-code.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

describe('ShowcaseHomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [HomeComponent],
      providers: [
        {
          provide: SourceCodeService, useValue: {
          loadDocument: () => of('home'),
        },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
