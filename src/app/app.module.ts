import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {routing} from './app-routing.module';
import {SelectComponent} from './showcase/select/select.component';
import {MultiSelectComponent} from './showcase/multi-select/multi-select.component';
import {ToggleComponent} from './showcase/toggle/toggle.component';
import {NavMenuComponent} from './layout/nav-menu/nav-menu.component';
import {SharedModule} from './shared/shared.module';
import { TableComponent } from './showcase/table/table.component';
import { FormComponent } from './showcase/form/form.component';
import { FormSectionComponent } from './showcase/form-section/form-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    MultiSelectComponent,
    ToggleComponent,
    NavMenuComponent,
    TableComponent,
    FormComponent,
    FormSectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
