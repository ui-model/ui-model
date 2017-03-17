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
      tags: ['select', 'radio group', 'dropdown', 'tabset', 'menu'].map(Tag.of),
      description: '',
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
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'toggle',
    component: ToggleComponent,
    data: {
      id: 'toggle',
      title: 'Toggle',
      tags: ['toggle'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'table',
    component: TableComponent,
    data: {
      id: 'table',
      title: 'Table',
      tags: ['table'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'tree',
    component: TreeComponent,
    data: {
      id: 'tree',
      title: 'Tree',
      tags: ['tree'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'form',
    component: FormComponent,
    data: {
      id: 'form',
      title: 'Form',
      tags: ['form'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: {
      id: 'calendar',
      title: 'Calendar',
      tags: ['calendar'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'preview',
    component: PreviewComponent,
    data: {
      id: 'preview',
      title: 'Preview',
      tags: ['preview'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'draggable',
    component: DraggableComponent,
    data: {
      id: 'draggable',
      title: 'Draggable',
      tags: ['draggable'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'modal',
    component: ModalComponent,
    data: {
      id: 'modal',
      title: 'Modal',
      tags: ['modal'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'chart',
    component: ChartComponent,
    data: {
      id: 'chart',
      title: 'Chart',
      tags: ['Chart', 'Pie'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'type-ahead',
    component: TypeAheadComponent,
    data: {
      id: 'type-ahead',
      title: 'Type-ahead',
      tags: ['type-ahead'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'zoom',
    component: ZoomComponent,
    data: {
      id: 'zoom',
      title: 'Zoom',
      tags: ['zoom'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
    data: {
      id: 'tooltip',
      title: 'Tooltip',
      tags: ['tooltip'].map(Tag.of),
      description: '',
      authors: ['wzc'].map(Author.of),
    }
  },
];

