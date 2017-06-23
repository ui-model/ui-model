import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './layout/app/app.component';
import { routing } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { GlobalModalComponent } from './layout/global-modal/global-modal.component';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CoreModule,
    routing,
  ],
  declarations: [
    AppComponent,
    GlobalModalComponent,
    NavHeaderComponent,
    NavMenuComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
