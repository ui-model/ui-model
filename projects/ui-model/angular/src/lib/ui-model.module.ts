import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import 'reflect-metadata';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CountDownDirective } from './directives/count-down.directive';
import { DateInputDirective } from './directives/date-input.directive';
import { DisabledDirective } from './directives/disabled.directive';
import { DynamicComponentInputsDirective } from './directives/dynamic-component-inputs.directive';
import { FieldMetadataDirective } from './directives/field-metadata.directive';
import { FileChangeDetectDirective } from './directives/file-change-detect.directive';
import { FocusDirective } from './directives/focus.directive';
import { FormArrayExporterDirective } from './directives/form-array-exporter.directive';
import { FormFieldDirective } from './directives/form-field.directive';
import { FormGroupExporterDirective } from './directives/form-group-exporter.directive';
import { ImgSrcFileDirective } from './directives/img-src-file.directive';
import { MeasureDirective } from './directives/measure.directive';
import { MovableDirective } from './directives/movable.directive';
import { MultiBindingDirective } from './directives/multi-binding.directive';
import { MultiSelectDirective } from './directives/multi-select.directive';
import { PagerDirective } from './directives/pager.directive';
import { PaginationDirective } from './directives/pagination.directive';
import { PreventDefaultDirective } from './directives/prevent-default.directive';
import { SelectDirective } from './directives/select.directive';
import { ToggleDirective } from './directives/toggle.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { TypeAheadDirective } from './directives/type-ahead.directive';
import { WindowMeasureDirective } from './directives/window-measure.directive';

import { DefaultPipe } from './pipes/default.pipe';
import { FieldErrorMapperPipe } from './pipes/field-error-mapper.pipe';
import { FieldLabelPipe } from './pipes/field-label.pipe';
import { FormatPipe } from './pipes/format.pipe';
import { IsEmptyPipe } from './pipes/is-empty.pipe';
import { IsInvalidDatePipe } from './pipes/is-invalid-date.pipe';
import { IsNotEmptyPipe } from './pipes/is-not-empty.pipe';
import { IsValidDatePipe } from './pipes/is-valid-date.pipe';
import { MomentPipe } from './pipes/moment.pipe';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { OrderNamePipe } from './pipes/order-name.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SafeResourceUrlPipe } from './pipes/safe-resource-url.pipe';
import { SafeScriptPipe } from './pipes/safe-script.pipe';
import { SafeStylePipe } from './pipes/safe-style.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { TemplatePipe } from './pipes/template.pipe';
import { TimesPipe } from './pipes/times.pipe';
import { TypeNamePipe } from './pipes/type-name.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    PagerDirective,
    PaginationDirective,

    ClickOutsideDirective,
    MovableDirective,
    MeasureDirective,
    ImgSrcFileDirective,
    FileChangeDetectDirective,

    FormatPipe,
    OrderByPipe,
    OrderNamePipe,
    TypeNamePipe,
    MomentPipe,
    SafeResourceUrlPipe,
    TypeAheadDirective,
    MultiBindingDirective,
    SafeStylePipe,
    TooltipDirective,
    DisabledDirective,
    SafeHtmlPipe,
    SafeScriptPipe,
    SafeUrlPipe,
    FocusDirective,
    PreventDefaultDirective,
    DefaultPipe,
    IsEmptyPipe,
    IsNotEmptyPipe,
    TimesPipe,
    ObjectToArrayPipe,
    CountDownDirective,
    FormArrayExporterDirective,
    FormGroupExporterDirective,
    FieldErrorMapperPipe,
    FieldMetadataDirective,
    FieldLabelPipe,
    TemplatePipe,
    DateInputDirective,
    IsValidDatePipe,
    IsInvalidDatePipe,
    DynamicComponentInputsDirective,
    WindowMeasureDirective,
    FormFieldDirective,
  ],
  exports: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    PagerDirective,
    PaginationDirective,
    DateInputDirective,

    MultiBindingDirective,
    ClickOutsideDirective,
    MovableDirective,
    MeasureDirective,
    ImgSrcFileDirective,
    FileChangeDetectDirective,
    TypeAheadDirective,
    TooltipDirective,
    DisabledDirective,
    FocusDirective,
    PreventDefaultDirective,
    CountDownDirective,
    FormArrayExporterDirective,
    FormGroupExporterDirective,
    FieldMetadataDirective,
    DynamicComponentInputsDirective,

    FormatPipe,
    OrderByPipe,
    OrderNamePipe,
    TypeNamePipe,
    MomentPipe,
    SafeResourceUrlPipe,
    SafeStylePipe,
    SafeHtmlPipe,
    SafeScriptPipe,
    DefaultPipe,
    IsEmptyPipe,
    IsNotEmptyPipe,
    TimesPipe,
    ObjectToArrayPipe,
    FieldErrorMapperPipe,
    FieldLabelPipe,
    TemplatePipe,
    IsValidDatePipe,
    IsInvalidDatePipe,
    WindowMeasureDirective,
    FormFieldDirective,
  ],
})
export class UiModelModule {
}

export * from './accessors/base.value-accessor';
export * from './accessors/calendar.value-accessor';
export * from './accessors/select.value-accessor';
export * from './accessors/multi-select.value-accessor';

export * from './decorators/form-maker';

export * from './directives/toggle.directive';
export * from './directives/select.directive';
export * from './directives/pager.directive';
export * from './directives/pagination.directive';
export * from './directives/multi-select.directive';

export * from './directives/click-outside.directive';
export * from './directives/movable.directive';
export * from './directives/measure.directive';
export * from './directives/img-src-file.directive';
export * from './directives/file-change-detect.directive';
export * from './directives/type-ahead.directive';
export * from './directives/tooltip.directive';
export * from './directives/disabled.directive';
export * from './directives/focus.directive';
export * from './directives/prevent-default.directive';
export * from './directives/count-down.directive';
export * from './directives/form-field.directive';
export * from './directives/form-array-exporter.directive';
export * from './directives/form-group-exporter.directive';
export * from './directives/field-metadata.directive';
export * from './directives/date-input.directive';
export * from './directives/dynamic-component-inputs.directive';

export * from './utils/base-control-within-form/base-control-within-form';
export * from './utils/next-tick';

export * from './pipes/format.pipe';
export * from './pipes/order-by.pipe';
export * from './pipes/order-name.pipe';
export * from './pipes/type-name.pipe';
export * from './pipes/moment.pipe';
export * from './pipes/safe-resource-url.pipe';
export * from './pipes/safe-url.pipe';
export * from './pipes/safe-html.pipe';
export * from './pipes/safe-script.pipe';
export * from './pipes/default.pipe';
export * from './pipes/is-empty.pipe';
export * from './pipes/is-not-empty.pipe';
export * from './pipes/times.pipe';
export * from './pipes/object-to-array.pipe';
export * from './pipes/field-error-mapper.pipe';
export * from './pipes/field-label.pipe';
export * from './pipes/template.pipe';
export * from './pipes/is-valid-date.pipe';
export * from './pipes/is-invalid-date.pipe';

export * from './validators/is-boolean.validator';
export * from './validators/is-integer.validator';
export * from './validators/is-date.validator';
export * from './validators/is-number.validator';
export * from './validators/min-value.validator';
export * from './validators/max-value.validator';
export * from './validators/url.validator';
export * from './validators/equals.validator';
export * from './validators/complexity.validator';

export * from './services/field-error-mapper.service';

export * from './services/form-maker.service';
export * from './services/form-utils.service';
export * from './services/window-measure.service';

export * from './services/modal.service';
export * from './services/modal.model';
export * from './services/toast.service';
export * from './services/toast.model';
export * from './services/name-mapper.service';
export * from './services/tooltip.service';

export * from './guards/update-title.guard';
