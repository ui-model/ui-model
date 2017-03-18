import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './layout/app/app.component';
import {routing} from './app-routing.module';
import {SelectComponent} from './showcase/select/select.component';
import {MultiSelectComponent} from './showcase/multi-select/multi-select.component';
import {ToggleComponent} from './showcase/toggle/toggle.component';
import {NavMenuComponent} from './layout/nav-menu/nav-menu.component';
import {SharedModule} from './shared/shared.module';
import {TableComponent} from './showcase/table/table.component';
import {FormComponent} from './showcase/form/form.component';
import {FormSectionComponent} from './showcase/form/form-section/form-section.component';
import {TreeComponent} from './showcase/tree/tree.component';
import {CalendarComponent} from './showcase/calendar/calendar.component';
import {PreviewComponent} from './showcase/preview/preview.component';
import {DraggableComponent} from './showcase/draggable/draggable.component';
import {ModalComponent} from './showcase/modal/modal.component';
import {ModalContentComponent} from './showcase/modal/modal-content/modal-content.component';
import {ModalService, TooltipService} from 'ui-model-angular';
import {GlobalModalComponent} from './layout/global-modal/global-modal.component';
import {ChartComponent} from './showcase/chart/chart.component';
import {TypeAheadComponent} from './showcase/type-ahead/type-ahead.component';
import {ZoomComponent} from './showcase/zoom/zoom.component';
import {TooltipComponent} from './showcase/tooltip/tooltip.component';
import {NavHeaderComponent} from './layout/nav-header/nav-header.component';
import {SourceViewerComponent} from './layout/source-viewer/source-viewer.component';
import {CoreModule} from './core/core.module';
import {DocumentViewerComponent} from './layout/document-viewer/document-viewer.component';
import {HomeComponent} from './showcase/home/home.component';
import { BriefViewerComponent } from './layout/brief-viewer/brief-viewer.component';

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
    TreeComponent,
    CalendarComponent,
    PreviewComponent,
    DraggableComponent,
    ModalComponent,
    ModalContentComponent,
    GlobalModalComponent,
    ChartComponent,
    TypeAheadComponent,
    ZoomComponent,
    TooltipComponent,
    NavHeaderComponent,
    SourceViewerComponent,
    DocumentViewerComponent,
    HomeComponent,
    BriefViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    CoreModule,
    routing,
  ],
  providers: [
    ModalService,
    TooltipService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
