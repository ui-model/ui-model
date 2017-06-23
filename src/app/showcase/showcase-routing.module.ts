import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { TableComponent } from './table/table.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TreeComponent } from './tree/tree.component';
import { FormComponent } from './form/form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PreviewComponent } from './preview/preview.component';
import { DraggableComponent } from './draggable/draggable.component';
import { ModalComponent } from './modal/modal.component';
import { ChartComponent } from './chart/chart.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import { ZoomComponent } from './zoom/zoom.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
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
import { FormModelComponent } from './form-model/form-model.component';
import { FormAutoUiComponent } from './form-auto-ui/form-auto-ui.component';
import { HomeComponent } from './home/home.component';
import { Author } from '../utils/author';
import { Tag } from '../utils/tag';
import { LayoutComponent } from './_layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      id: 'home',
      title: 'Home',
      authors: ['wzc'].map(Author.of),
    },
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'select',
        component: SelectComponent,
        data: {
          title: 'Select',
          tags: ['select'].map(Tag.of),
          description: '`select` means: choose `1` from `N`',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'select-ng-model',
        component: SelectNgModelComponent,
        data: {
          title: 'Select(ngModel)',
          tags: ['select', 'ngModel'].map(Tag.of),
          description: '`select` means: choose `1` from `N`',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'radio-group',
        component: RadioGroupComponent,
        data: {
          title: 'Radio Group',
          tags: ['select', 'radio group'].map(Tag.of),
          description: '`select` means: choose `1` from `N`',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'radio-button',
        component: RadioButtonComponent,
        data: {
          title: 'Radio Button',
          tags: ['select', 'radio button'].map(Tag.of),
          description: '`select` means: choose `1` from `N`',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'tab-set',
        component: TabSetComponent,
        data: {
          title: 'Tab Set',
          tags: ['select', 'tab set', 'multi-page'].map(Tag.of),
          description: '`select` means: choose `1` from `N`',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'tab-set-using-directive',
        component: TabSetUsingDirectiveComponent,
        data: {
          title: 'Tab Set(Directive)',
          tags: ['select', 'tab set', 'multi-page'].map(Tag.of),
          description: '`select` means: choose `1` from `N`',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'menu',
        component: MenuComponent,
        data: {
          title: 'Menu',
          tags: ['select', 'menu'].map(Tag.of),
          description: '`select` means: choose `1` from `N`',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'multi-select',
        component: MultiSelectComponent,
        data: {
          title: 'Multi-select',
          tags: ['multi-select'].map(Tag.of),
          description: '`multi-select` means: choose `n` from `M`, and it has an undetermined state',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'multi-select-checkbox',
        component: MultiSelectCheckboxComponent,
        data: {
          title: 'Multi-select(customized)',
          tags: ['multi-select', 'checkbox'].map(Tag.of),
          description: '`multi-select` means: choose `n` from `M`, and it has an undetermined state',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'multi-select-ng-model',
        component: MultiSelectNgModelComponent,
        data: {
          title: 'Multi-select(ngModel)',
          tags: ['multi-select', 'ng-model'].map(Tag.of),
          description: '`multi-select` means: choose `n` from `M`, and it has an undetermined state',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'toggle',
        component: ToggleComponent,
        data: {
          title: 'Toggle',
          tags: ['toggle', 'dropdown', 'modal', 'more', 'panel', 'collapse', 'fold'].map(Tag.of),
          description: '`toggle` means: it has two states, which can be toggled between the two states',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'toggle-ng-model',
        component: ToggleNgModelComponent,
        data: {
          title: 'Toggle(ngModel)',
          tags: ['toggle', 'ngModel'].map(Tag.of),
          description: '`toggle` means: it has two states, which can be toggled between the two states',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'dropdown',
        component: DropdownComponent,
        data: {
          title: 'Dropdown',
          tags: ['toggle', 'dropdown'].map(Tag.of),
          description: '`toggle` means: it has two states, which can be toggled between the two states',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'inplace-editor',
        component: InplaceEditorComponent,
        data: {
          title: 'Inplace Editor',
          tags: ['toggle', 'inplace-editor'].map(Tag.of),
          description: '`toggle` means: it has two states, which can be toggled between the two states',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'panel',
        component: PanelComponent,
        data: {
          title: 'Panel',
          tags: ['toggle', 'panel'].map(Tag.of),
          description: '`toggle` means: it has two states, which can be toggled between the two states',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'toggle-details',
        component: ToggleDetailsComponent,
        data: {
          title: 'Toggle Details',
          tags: ['toggle'].map(Tag.of),
          description: '`toggle` means: it has two states, which can be toggled between the two states',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'toggle-images',
        component: ToggleImagesComponent,
        data: {
          title: 'Toggle Images',
          tags: ['toggle'].map(Tag.of),
          description: '`toggle` means: it has two states, which can be toggled between the two states',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'Table',
          tags: ['table', 'sort', 'pager', 'resize', 'drag', 'measure', 'pagination', 'viewport'].map(Tag.of),
          description: '`table` is **composed** of `sort`/`slice`/`resize`/`pagination`...',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'tree',
        component: TreeComponent,
        data: {
          title: 'Tree',
          tags: ['tree', 'recursive', 'fold'].map(Tag.of),
          description: '`tree` is a simple **recursive** showcase',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'form',
        component: FormComponent,
        data: {
          title: 'Form',
          tags: ['form', 'recursive', 'nested', 'accessor', 'ngModel'].map(Tag.of),
          description: 'How to **split** a form into a number of separated components',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent,
        data: {
          title: 'Reactive Form',
          tags: ['form', 'reactive', 'nested', 'dynamic'].map(Tag.of),
          description: 'How to **split** a form into a number of separated components using reactive form',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'form-model',
        component: FormModelComponent,
        data: {
          title: 'Form Model',
          tags: ['form', 'model', 'dynamic'].map(Tag.of),
          description: 'How to build a form from a form model',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'form-auto-ui',
        component: FormAutoUiComponent,
        data: {
          title: 'Form Auto UI',
          tags: ['form', 'model', 'dynamic', 'automatic'].map(Tag.of),
          description: 'How to build a form UI from a form model',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        data: {
          title: 'Calendar',
          tags: ['calendar', 'moment'].map(Tag.of),
          description: 'How to simplify a **complex** components into ui-model',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'preview',
        component: PreviewComponent,
        data: {
          title: 'Preview',
          tags: ['preview', 'upload', 'safe', 'resource'].map(Tag.of),
          description: 'How to **upload** file and preview it locally',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'draggable',
        component: DraggableComponent,
        data: {
          title: 'Draggable',
          tags: ['draggable', 'move', 'measure'].map(Tag.of),
          description: 'How to use the **helper directive** to **bridge** between ui-model and view',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'modal',
        component: ModalComponent,
        data: {
          title: 'Modal',
          tags: ['modal', 'toggle', 'service'].map(Tag.of),
          description: 'How to use the global **service** to encapsulate ui-model',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'chart',
        component: ChartComponent,
        data: {
          title: 'Chart',
          tags: ['chart', 'pie', 'svg', 'math', 'coordinate'].map(Tag.of),
          description: `How to use **svg** as the ui-model's view layer`,
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'd3-basic',
        component: D3BasicComponent,
        data: {
          title: 'D3 Basic',
          tags: ['chart', 'd3', 'bar'].map(Tag.of),
          description: `How to simply integrate with d3 library`,
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'd3-line-chart',
        component: D3LineChartComponent,
        data: {
          title: 'D3 Line Chart',
          tags: ['chart', 'd3', 'line'].map(Tag.of),
          description: `How to integrate with d3 library through ui-model`,
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'type-ahead',
        component: TypeAheadComponent,
        data: {
          title: 'Type-ahead',
          tags: ['type-ahead', 'autocomplete', 'search'].map(Tag.of),
          description: '`type-ahead` is composed of `toggle` and a helper directive',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'zoom',
        component: ZoomComponent,
        data: {
          title: 'Zoom',
          tags: ['zoom', 'measure', 'size', 'mapping', 'rect'].map(Tag.of),
          description: 'Zoom is composed of two logic: `measure` & `mapping`',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
        data: {
          title: 'Tooltip',
          tags: ['tooltip', 'measure', 'size', 'locate', 'rect'].map(Tag.of),
          description: '`tooltip` is an instance of `measure`',
          authors: ['wzc'].map(Author.of),
        },
      },
      {
        path: 'infinite-scroll',
        component: InfiniteScrollComponent,
        data: {
          title: 'Infinite Scroll',
          tags: ['scroll', 'measure', 'super list', 'locate'].map(Tag.of),
          description: 'List of millions of rows',
          authors: ['wzc'].map(Author.of),
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseRoutingModule {
}
