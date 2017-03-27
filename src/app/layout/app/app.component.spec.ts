/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NavHeaderComponent} from '../nav-header/nav-header.component';
import {NavMenuComponent} from '../nav-menu/nav-menu.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {GlobalModalComponent} from '../global-modal/global-modal.component';
import {UiModelBootstrapModule} from '@ui-model/angular-bootstrap';
import {SourceCodeService} from '../../core/source-code.service';
import {Http, HttpModule} from '@angular/http';

xdescribe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavHeaderComponent,
        NavMenuComponent,
        GlobalModalComponent,
      ],
      imports: [
        RouterModule,
        FormsModule,
        HttpModule,
        UiModelBootstrapModule,
      ],
      providers: [
        SourceCodeService,
      ]
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
