/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SourceCodeService } from '../../core/source-code.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        SourceCodeService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
