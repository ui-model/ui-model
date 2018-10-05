import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModelModule } from '@ui-model/angular';
import { RadioGroupWithinFormComponent, TypeAheadWithinFormComponent, UiModelBootstrapModule, } from '@ui-model/angular-bootstrap';
import { UiModelMarkdownModule } from '@ui-model/angular-markdown';
import { SharedModule } from '../shared/shared.module';
import { BriefViewerComponent } from './_layout/brief-viewer/brief-viewer.component';
import { DocumentViewerComponent } from './_layout/document-viewer/document-viewer.component';
import { LayoutComponent } from './_layout/layout/layout.component';
import { SourceViewerComponent } from './_layout/source-viewer/source-viewer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChartComponent } from './chart/chart.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AgreeLicenseEditorComponent } from './form-auto-ui/editors/agree-license-editor/agree-license-editor.component';
import { FormAutoUiComponent } from './form-auto-ui/form-auto-ui.component';
import { RemoteUsernameValidator } from './form-auto-ui/validators/remote-username.validator';
import { FormModelComponent } from './form-model/form-model.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { InplaceEditorComponent } from './inplace-editor/inplace-editor.component';
import { MenuComponent } from './menu/menu.component';
import { ModalContentComponent } from './modal/modal-content/modal-content.component';
import { ModalCustomComponent } from './modal/modal-custom/modal-custom.component';
import { ModalComponent } from './modal/modal.component';
import { MovableComponent } from './movable/movable.component';
import { MultiSelectCheckboxComponent } from './multi-select-checkbox/multi-select-checkbox.component';
import { MultiSelectNgModelComponent } from './multi-select-ng-model/multi-select-ng-model.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { PanelComponent } from './panel/panel.component';
import { PreviewComponent } from './preview/preview.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { BasicInfoGroupComponent } from './reactive-form/basic-info-group/basic-info-group.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { SelectNgModelComponent } from './select-ng-model/select-ng-model.component';

import { SelectComponent } from './select/select.component';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { TabSetUsingDirectiveComponent } from './tab-set-using-directive/tab-set-using-directive.component';
import { TabSetComponent } from './tab-set/tab-set.component';
import { TableComponent } from './table/table.component';
import { ToastComponent } from './toast/toast.component';
import { ToggleDetailsComponent } from './toggle-details/toggle-details.component';
import { ToggleImagesComponent } from './toggle-images/toggle-images.component';
import { ToggleNgModelComponent } from './toggle-ng-model/toggle-ng-model.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { ZoomComponent } from './zoom/zoom.component';
import { UiModelD3Module } from '@ui-model/angular-d3';
import { D3BasicComponent } from './d3-basic/d3-basic.component';
import { D3LineChartComponent } from './d3-line-chart/d3-line-chart.component';
import { D3GaugeComponent } from './d3-gauge/d3-gauge.component';
import { D3GeoMapComponent } from './d3-geo-map/d3-geo-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModelModule.forFeature(),
    UiModelBootstrapModule.forFeature(),
    UiModelMarkdownModule.forFeature(),
    UiModelD3Module.forFeature(),
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
    MovableComponent,
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
    InfiniteScrollComponent,
    ReactiveFormComponent,
    BasicInfoGroupComponent,
    FormModelComponent,
    FormAutoUiComponent,
    AgreeLicenseEditorComponent,
    SelectBoxComponent,
    ModalCustomComponent,
    ToastComponent,
    D3BasicComponent,
    D3LineChartComponent,
    D3GaugeComponent,
    D3GeoMapComponent,
  ],
  providers: [RemoteUsernameValidator],
  entryComponents: [
    RadioGroupWithinFormComponent,
    AgreeLicenseEditorComponent,
    ModalCustomComponent,
    TypeAheadWithinFormComponent,
  ],
})
export class ShowcaseModule {
}
