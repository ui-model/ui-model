import {Route} from '@angular/router';
import {HomeComponent} from '../showcase/home/home.component';
import {SelectComponent} from '../showcase/select/select.component';
import {MultiSelectComponent} from '../showcase/multi-select/multi-select.component';
import {TableComponent} from '../showcase/table/table.component';
import {ToggleComponent} from '../showcase/toggle/toggle.component';
import {TreeComponent} from '../showcase/tree/tree.component';
import {FormComponent} from '../showcase/form/form.component';
import {CalendarComponent} from '../showcase/calendar/calendar.component';
import {PreviewComponent} from '../showcase/preview/preview.component';
import {DraggableComponent} from '../showcase/draggable/draggable.component';
import {ModalComponent} from '../showcase/modal/modal.component';
import {ChartComponent} from '../showcase/chart/chart.component';
import {TypeAheadComponent} from '../showcase/type-ahead/type-ahead.component';
import {ZoomComponent} from '../showcase/zoom/zoom.component';
import {TooltipComponent} from '../showcase/tooltip/tooltip.component';
import {Author} from './author';
import {Tag} from './tag';
import {RadioGroupComponent} from '../showcase/radio-group/radio-group.component';
import {RadioButtonComponent} from '../showcase/radio-button/radio-button.component';
import {TabSetComponent} from '../showcase/tab-set/tab-set.component';
import {TabSetUsingDirectiveComponent} from '../showcase/tab-set-using-directive/tab-set-using-directive.component';
import {MenuComponent} from '../showcase/menu/menu.component';
import {MultiSelectCheckboxComponent} from '../showcase/multi-select-checkbox/multi-select-checkbox.component';
import {MultiSelectNgModelComponent} from '../showcase/multi-select-ng-model/multi-select-ng-model.component';
import {DropdownComponent} from '../showcase/dropdown/dropdown.component';
import {InplaceEditorComponent} from '../showcase/inplace-editor/inplace-editor.component';
import {PanelComponent} from '../showcase/panel/panel.component';
import {ToggleDetailsComponent} from '../showcase/toggle-details/toggle-details.component';
import {ToggleImagesComponent} from '../showcase/toggle-images/toggle-images.component';

export const showcaseRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      id: 'home',
      title: 'Home',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'select',
    component: SelectComponent,
    data: {
      id: 'select',
      title: 'Select',
      tags: ['select'].map(Tag.of),
      description: '`select` means: choose `1` from `N`',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'radio-group',
    component: RadioGroupComponent,
    data: {
      id: 'radio-group',
      title: 'Radio Group',
      tags: ['radio group'].map(Tag.of),
      description: '`select` means: choose `1` from `N`',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'radio-button',
    component: RadioButtonComponent,
    data: {
      id: 'radio-button',
      title: 'Radio Button',
      tags: ['radio button'].map(Tag.of),
      description: '`select` means: choose `1` from `N`',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'tab-set',
    component: TabSetComponent,
    data: {
      id: 'tab-set',
      title: 'Tab Set',
      tags: ['tab set', 'multi-page'].map(Tag.of),
      description: '`select` means: choose `1` from `N`',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'tab-set-using-directive',
    component: TabSetUsingDirectiveComponent,
    data: {
      id: 'tab-set-using-directive',
      title: 'Tab Set(Directive)',
      tags: ['tab set', 'multi-page'].map(Tag.of),
      description: '`select` means: choose `1` from `N`',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'menu',
    component: MenuComponent,
    data: {
      id: 'menu',
      title: 'Menu',
      tags: ['menu'].map(Tag.of),
      description: '`select` means: choose `1` from `N`',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'multi-select',
    component: MultiSelectComponent,
    data: {
      id: 'multi-select',
      title: 'Multi-select',
      tags: ['multi-select'].map(Tag.of),
      description: '`multi-select` means: choose `n` from `M`, and it has an undetermined state',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'multi-select-checkbox',
    component: MultiSelectCheckboxComponent,
    data: {
      id: 'multi-select-checkbox',
      title: 'Multi-select(customized)',
      tags: ['multi-select', 'checkbox'].map(Tag.of),
      description: '`multi-select` means: choose `n` from `M`, and it has an undetermined state',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'multi-select-ng-model',
    component: MultiSelectNgModelComponent,
    data: {
      id: 'multi-select-ng-model',
      title: 'Multi-select(ngModel)',
      tags: ['multi-select', 'ng-model'].map(Tag.of),
      description: '`multi-select` means: choose `n` from `M`, and it has an undetermined state',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'toggle',
    component: ToggleComponent,
    data: {
      id: 'toggle',
      title: 'Toggle',
      tags: ['toggle', 'dropdown', 'modal', 'more', 'panel', 'collapse', 'fold'].map(Tag.of),
      description: '`toggle` means: it has two states, which can be toggled between the two states',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
    data: {
      id: 'dropdown',
      title: 'Dropdown',
      tags: ['toggle', 'dropdown'].map(Tag.of),
      description: '`toggle` means: it has two states, which can be toggled between the two states',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'inplace-editor',
    component: InplaceEditorComponent,
    data: {
      id: 'inplace-editor',
      title: 'Inplace Editor',
      tags: ['toggle', 'inplace-editor'].map(Tag.of),
      description: '`toggle` means: it has two states, which can be toggled between the two states',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'panel',
    component: PanelComponent,
    data: {
      id: 'panel',
      title: 'Panel',
      tags: ['toggle', 'panel'].map(Tag.of),
      description: '`toggle` means: it has two states, which can be toggled between the two states',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'toggle-details',
    component: ToggleDetailsComponent,
    data: {
      id: 'toggle-details',
      title: 'Toggle Details',
      tags: ['toggle'].map(Tag.of),
      description: '`toggle` means: it has two states, which can be toggled between the two states',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'toggle-images',
    component: ToggleImagesComponent,
    data: {
      id: 'toggle-images',
      title: 'Toggle Images',
      tags: ['toggle'].map(Tag.of),
      description: '`toggle` means: it has two states, which can be toggled between the two states',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'table',
    component: TableComponent,
    data: {
      id: 'table',
      title: 'Table',
      tags: ['table', 'sort', 'resize', 'drag', 'measure', 'pagination', 'viewport'].map(Tag.of),
      description: '`table` is **composed** of `sort`/`slice`/`resize`/`pagination`...',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'tree',
    component: TreeComponent,
    data: {
      id: 'tree',
      title: 'Tree',
      tags: ['tree', 'recursive', 'fold'].map(Tag.of),
      description: '`tree` is a simple **recursive** showcase',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'form',
    component: FormComponent,
    data: {
      id: 'form',
      title: 'Form',
      tags: ['form', 'recursive', 'nested', 'accessor', 'ngModel'].map(Tag.of),
      description: 'How to **split** a form into a number of separated components',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: {
      id: 'calendar',
      title: 'Calendar',
      tags: ['calendar', 'moment'].map(Tag.of),
      description: 'How to simplify a **complex** components into ui-model',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'preview',
    component: PreviewComponent,
    data: {
      id: 'preview',
      title: 'Preview',
      tags: ['preview', 'upload', 'safe', 'resource'].map(Tag.of),
      description: 'How to **upload** file and preview it locally',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'draggable',
    component: DraggableComponent,
    data: {
      id: 'draggable',
      title: 'Draggable',
      tags: ['draggable', 'move', 'measure'].map(Tag.of),
      description: 'How to use the **helper directive** to **bridge** between ui-model and view',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'modal',
    component: ModalComponent,
    data: {
      id: 'modal',
      title: 'Modal',
      tags: ['modal', 'toggle', 'service'].map(Tag.of),
      description: 'How to use the global **service** to encapsulate ui-model',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'chart',
    component: ChartComponent,
    data: {
      id: 'chart',
      title: 'Chart',
      tags: ['chart', 'pie', 'svg', 'math', 'coordinate'].map(Tag.of),
      description: `How to use **svg** as the ui-model's view layer`,
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'type-ahead',
    component: TypeAheadComponent,
    data: {
      id: 'type-ahead',
      title: 'Type-ahead',
      tags: ['type-ahead', 'autocomplete', 'search'].map(Tag.of),
      description: '`type-ahead` is composed of `toggle` and a helper directive',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'zoom',
    component: ZoomComponent,
    data: {
      id: 'zoom',
      title: 'Zoom',
      tags: ['zoom', 'measure', 'size', 'mapping', 'rect'].map(Tag.of),
      description: 'Zoom is composed of two logic: `measure` & `mapping`',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
    data: {
      id: 'tooltip',
      title: 'Tooltip',
      tags: ['tooltip', 'measure', 'size', 'locate', 'rect'].map(Tag.of),
      description: '`tooltip` is an instance of `measure`',
      authors: ['wzc'].map(Author.of),
    }
  },
];

