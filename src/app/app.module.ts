import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {ModalService, TooltipService} from '@ui-model/angular';
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
import {BriefViewerComponent} from './layout/brief-viewer/brief-viewer.component';
import {RadioGroupComponent} from './showcase/radio-group/radio-group.component';
import {RadioButtonComponent} from './showcase/radio-button/radio-button.component';
import {TabSetComponent} from './showcase/tab-set/tab-set.component';
import {TabSetUsingDirectiveComponent} from './showcase/tab-set-using-directive/tab-set-using-directive.component';
import {MenuComponent} from './showcase/menu/menu.component';
import {MultiSelectCheckboxComponent} from './showcase/multi-select-checkbox/multi-select-checkbox.component';
import {MultiSelectNgModelComponent} from './showcase/multi-select-ng-model/multi-select-ng-model.component';
import {DropdownComponent} from './showcase/dropdown/dropdown.component';
import {InplaceEditorComponent} from './showcase/inplace-editor/inplace-editor.component';
import {PanelComponent} from './showcase/panel/panel.component';
import {ToggleDetailsComponent} from './showcase/toggle-details/toggle-details.component';
import {ToggleImagesComponent} from './showcase/toggle-images/toggle-images.component';
import {ToggleNgModelComponent} from './showcase/toggle-ng-model/toggle-ng-model.component';
import {SelectNgModelComponent} from './showcase/select-ng-model/select-ng-model.component';
import {D3BasicComponent} from './showcase/d3-basic/d3-basic.component';
import {InfiniteScrollComponent} from './showcase/infinite-scroll/infinite-scroll.component';
import {ShowcaseComponent} from './layout/showcase/showcase.component';
import {D3LineChartComponent} from './showcase/d3-line-chart/d3-line-chart.component';
import {UiModelD3Module} from './@ui-model/angular-d3/src/ui-model-d3.module';
import { ReactiveFormComponent } from './showcase/reactive-form/reactive-form.component';
import { BasicInfoGroupComponent } from './showcase/reactive-form/basic-info-group/basic-info-group.component';

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
    RadioGroupComponent,
    RadioButtonComponent,
    TabSetComponent,
    TabSetUsingDirectiveComponent,
    MenuComponent,
    MultiSelectCheckboxComponent,
    MultiSelectNgModelComponent,
    DropdownComponent,
    InplaceEditorComponent,
    PanelComponent,
    ToggleDetailsComponent,
    ToggleImagesComponent,
    ToggleNgModelComponent,
    SelectNgModelComponent,
    D3BasicComponent,
    InfiniteScrollComponent,
    ShowcaseComponent,
    D3LineChartComponent,
    ReactiveFormComponent,
    BasicInfoGroupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    CoreModule,
    UiModelD3Module,
    routing,
  ],
  providers: [
    ModalService,
    TooltipService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
