import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectDirective} from './directives/select.directive';
import {MultiSelectDirective} from './directives/multi-select.directive';
import {ToggleDirective} from './directives/toggle.directive';
import {PagerDirective} from './directives/pager.directive';
import {PaginationDirective} from './directives/pagination.directive';
import {ClickOutsideDirective} from './directives/click-outside.directive';
import {DraggableDirective} from './directives/draggable.directive';
import {FormatPipe} from './pipes/format.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {OrderNamePipe} from './pipes/order-name.pipe';
import {TypeNamePipe} from './pipes/type-name.pipe';
import {MomentPipe} from './pipes/moment.pipe';
import {SafeResourceUrlPipe} from './pipes/safe-resource-url.pipe';
import {ImgSrcFileDirective} from './directives/img-src-file.directive';
import {FileChangeDetectDirective} from './directives/file-change-detect.directive';
import {MeasureDirective} from './directives/measure.directive';
import {TypeAheadDirective} from './directives/type-ahead.directive';
import {MultiBindingDirective} from './directives/multi-binding.directive';
import {SafeStylePipe} from './pipes/safe-style.pipe';
import {DisabledDirective} from './directives/disabled.directive';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {SafeScriptPipe} from './pipes/safe-script.pipe';
import {SafeUrlPipe} from './pipes/safe-url.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    PagerDirective,
    PaginationDirective,

    ClickOutsideDirective,
    DraggableDirective,
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
    DisabledDirective,
    SafeHtmlPipe,
    SafeScriptPipe,
    SafeUrlPipe,
  ],
  exports: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    PagerDirective,
    PaginationDirective,

    MultiBindingDirective,
    ClickOutsideDirective,
    DraggableDirective,
    MeasureDirective,
    ImgSrcFileDirective,
    FileChangeDetectDirective,
    TypeAheadDirective,
    DisabledDirective,

    FormatPipe,
    OrderByPipe,
    OrderNamePipe,
    TypeNamePipe,
    MomentPipe,
    SafeResourceUrlPipe,
    SafeStylePipe,
    SafeHtmlPipe,
    SafeScriptPipe,
  ],
})
export class UiModelModule {
}

export * from './accessors/calendar-value-accessor';

export * from './directives/toggle.directive';
export * from './directives/select.directive';
export * from './directives/pager.directive';
export * from './directives/pagination.directive';
export * from './directives/multi-select.directive';

export * from './directives/click-outside.directive';
export * from './directives/draggable.directive';
export * from './directives/measure.directive';
export * from './directives/img-src-file.directive';
export * from './directives/file-change-detect.directive';
export * from './directives/type-ahead.directive';
export * from './directives/disabled.directive';

export * from './pipes/format.pipe';
export * from './pipes/order-by.pipe';
export * from './pipes/order-name.pipe';
export * from './pipes/type-name.pipe';
export * from './pipes/moment.pipe';
export * from './pipes/safe-resource-url.pipe';
export * from './pipes/safe-url.pipe';
export * from './pipes/safe-html.pipe';
export * from './pipes/safe-script.pipe';

export * from './services/modal.service';

export * from './utils/animations';
