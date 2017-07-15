import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ALL_SERVICES_OF_UI_MODEL_D3, UiModelD3Module } from '@ui-model/angular-d3';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SelectComponent } from './select/select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { TreeComponent } from './tree/tree.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PreviewComponent } from './preview/preview.component';
import { DraggableComponent } from './draggable/draggable.component';
import { ModalComponent } from './modal/modal.component';
import { ModalContentComponent } from './modal/modal-content/modal-content.component';
import { ChartComponent } from './chart/chart.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { ZoomComponent } from './zoom/zoom.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { TabSetComponent } from './tab-set/tab-set.component';
import { TabSetUsingDirectiveComponent } from './tab-set-using-directive/tab-set-using-directive.component';
import { MenuComponent } from './menu/menu.component';
import { MultiSelectCheckboxComponent } from './multi-select-checkbox/multi-select-checkbox.component';
import { MultiSelectNgModelComponent } from './multi-select-ng-model/multi-select-ng-model.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InplaceEditorComponent } from './inplace-editor/inplace-editor.component';
import { PanelComponent } from './panel/panel.component';
import { ToggleDetailsComponent } from './toggle-details/toggle-details.component';
import { ToggleImagesComponent } from './toggle-images/toggle-images.component';
import { ToggleNgModelComponent } from './toggle-ng-model/toggle-ng-model.component';
import { SelectNgModelComponent } from './select-ng-model/select-ng-model.component';
import { D3BasicComponent } from './d3-basic/d3-basic.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { D3LineChartComponent } from './d3-line-chart/d3-line-chart.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BasicInfoGroupComponent } from './reactive-form/basic-info-group/basic-info-group.component';
import { FormModelComponent } from './form-model/form-model.component';
import { FormAutoUiComponent } from './form-auto-ui/form-auto-ui.component';
import { AgreeLicenseEditorComponent } from './form-auto-ui/editors/agree-license-editor/agree-license-editor.component';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { RemoteUsernameValidator } from './form-auto-ui/validators/remote-username.validator';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './_layout/layout/layout.component';
import { BriefViewerComponent } from './_layout/brief-viewer/brief-viewer.component';
import { DocumentViewerComponent } from './_layout/document-viewer/document-viewer.component';
import { SourceViewerComponent } from './_layout/source-viewer/source-viewer.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioGroupWithinFormComponent } from '@ui-model/angular-bootstrap';
import { D3GaugeComponent } from './d3-gauge/d3-gauge.component';
import { D3GeoMapComponent } from './d3-geo-map/d3-geo-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UiModelD3Module,
    SharedModule,
    ShowcaseRoutingModule,
  ],
  declarations: [
    HomeComponent,
    LayoutComponent,
    BriefViewerComponent,
    DocumentViewerComponent,
    SourceViewerComponent,
    SelectComponent,
    MultiSelectComponent,
    ToggleComponent,
    TableComponent,
    FormComponent,
    TreeComponent,
    CalendarComponent,
    PreviewComponent,
    DraggableComponent,
    ModalComponent,
    ModalContentComponent,
    ChartComponent,
    TypeAheadComponent,
    ZoomComponent,
    TooltipComponent,
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
    D3LineChartComponent,
    ReactiveFormComponent,
    BasicInfoGroupComponent,
    FormModelComponent,
    FormAutoUiComponent,
    AgreeLicenseEditorComponent,
    SelectBoxComponent,
    D3GaugeComponent,
    D3GeoMapComponent,
  ],
  providers: [RemoteUsernameValidator, ...ALL_SERVICES_OF_UI_MODEL_D3],
  entryComponents: [RadioGroupWithinFormComponent, AgreeLicenseEditorComponent],
})
export class ShowcaseModule {
}
