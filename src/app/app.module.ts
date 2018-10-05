import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UiModelModule } from '@ui-model/angular';
import { UiModelBootstrapModule } from '@ui-model/angular-bootstrap';
import { UiModelMarkdownModule } from '@ui-model/angular-markdown';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './layout/app/app.component';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { SharedModule } from './shared/shared.module';
import { UiModelD3Module } from '@ui-model/angular-d3';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CoreModule,
    UiModelModule.forRoot(),
    UiModelBootstrapModule.forRoot(),
    UiModelMarkdownModule.forRoot(),
    UiModelD3Module.forRoot(),
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
