import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UiModelModule} from "ui-model-angular";
import {UiModelBootstrapModule} from "ui-model-angular-bootstrap";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {MomentPipe} from "./pipes/moment.pipe";

@NgModule({
  imports: [
    CommonModule,
    UiModelModule,
    UiModelBootstrapModule,
  ],
  declarations: [
    CalendarComponent,
    MomentPipe,
  ],
  exports: [
    UiModelModule,
    UiModelBootstrapModule,
    MomentPipe,
  ],
})
export class SharedModule {
}
