import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDirective } from './ui-model/select.directive';
import { MultiSelectDirective } from './ui-model/multi-select.directive';
import { ToggleDirective } from './ui-model/toggle.directive';
import { PagerDirective } from './ui-model/pager.directive';
import { PaginationDirective } from './ui-model/pagination.directive';

import { ClickOutsideDirective } from './utils/click-outside.directive';
import { ResizeDirective } from './utils/resize.directive';
import { DraggableDirective } from './utils/draggable.directive';
import { FormatPipe } from './utils/format.pipe';
import { OrderByPipe } from './utils/order-by.pipe';
import { OrderNamePipe } from './utils/order-name.pipe';
import { TypeNamePipe } from './utils/type-name.pipe';

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
    ResizeDirective,

    FormatPipe,
    OrderByPipe,
    OrderNamePipe,
    TypeNamePipe,
  ],
  exports: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    PagerDirective,
    PaginationDirective,

    ClickOutsideDirective,
    DraggableDirective,
    ResizeDirective,

    FormatPipe,
    OrderByPipe,
    OrderNamePipe,
    TypeNamePipe,
  ],
})
export class UiModelModule {
}

export * from './ui-model/toggle.directive';
export * from './ui-model/select.directive';
export * from './ui-model/pager.directive';
export * from './ui-model/pagination.directive';
export * from './ui-model/multi-select.directive';

export * from './utils/click-outside.directive';
export * from './utils/draggable.directive';
export * from './utils/resize.directive';
export * from './utils/format.pipe';
export * from './utils/order-by.pipe';
export * from './utils/order-name.pipe';
export * from './utils/type-name.pipe';
