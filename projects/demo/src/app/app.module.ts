import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './layout/app/app.component';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NavMenuComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
