import {Route, RouterModule} from '@angular/router';
import {SelectComponent} from './showcase/select/select.component';
import {MultiSelectComponent} from './showcase/multi-select/multi-select.component';
import {ToggleComponent} from './showcase/toggle/toggle.component';
import {TableComponent} from './showcase/table/table.component';
import {FormComponent} from './showcase/form/form.component';
import {TreeComponent} from './showcase/tree/tree.component';
import {CalendarComponent} from './showcase/calendar/calendar.component';
import {PreviewComponent} from './showcase/preview/preview.component';
import {DraggableComponent} from './showcase/draggable/draggable.component';
import {ModalComponent} from './showcase/modal/modal.component';
import {ChartComponent} from './showcase/chart/chart.component';
import {TypeAheadComponent} from './showcase/type-ahead/type-ahead.component';
import {ZoomComponent} from './showcase/zoom/zoom.component';
import {TooltipComponent} from './showcase/tooltip/tooltip.component';
import {DocumentViewerComponent} from './showcase/document-viewer/document-viewer.component';
import {SourceViewerComponent} from './layout/source-viewer/source-viewer.component';
import {HomeComponent} from './showcase/home/home.component';
import {Metadata} from './showcase/_common/meta-data';
import {UpdateTitleGuard} from './core/update-title.service';
export const showcaseRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    data: new Metadata()
      .setId('home')
      .setTitle('Home')
      .setAuthors(['wzc'])
  },
  {
    path: 'select',
    component: SelectComponent,
    data: new Metadata()
      .setId('select')
      .setTitle('Select')
      .setTags(['select', 'radio group', 'dropdown', 'tabset', 'menu'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'multi-select',
    component: MultiSelectComponent,
    data: new Metadata()
      .setId('multi-select')
      .setTitle('Multi-select')
      .setTags(['multi-select'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'toggle',
    component: ToggleComponent,
    data: new Metadata()
      .setId('toggle')
      .setTitle('Toggle')
      .setTags(['toggle'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'table',
    component: TableComponent,
    data: new Metadata()
      .setId('table')
      .setTitle('Table')
      .setTags(['table'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'tree',
    component: TreeComponent,
    data: new Metadata()
      .setId('tree')
      .setTitle('Tree')
      .setTags(['tree'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'form',
    component: FormComponent,
    data: new Metadata()
      .setId('form')
      .setTitle('Form')
      .setTags(['form'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: new Metadata()
      .setId('calendar')
      .setTitle('Calendar')
      .setTags(['calendar'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'preview',
    component: PreviewComponent,
    data: new Metadata()
      .setId('preview')
      .setTitle('Preview')
      .setTags(['preview'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'draggable',
    component: DraggableComponent,
    data: new Metadata()
      .setId('draggable')
      .setTitle('Draggable')
      .setTags(['draggable'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'modal',
    component: ModalComponent,
    data: new Metadata()
      .setId('modal')
      .setTitle('Modal')
      .setTags(['modal'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'chart',
    component: ChartComponent,
    data: new Metadata()
      .setId('chart')
      .setTitle('Chart')
      .setTags(['Chart', 'Pie'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'type-ahead',
    component: TypeAheadComponent,
    data: new Metadata()
      .setId('type-ahead')
      .setTitle('Type-ahead')
      .setTags(['type-ahead'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'zoom',
    component: ZoomComponent,
    data: new Metadata()
      .setId('zoom')
      .setTitle('Zoom')
      .setTags(['zoom'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
    data: new Metadata()
      .setId('tooltip')
      .setTitle('Tooltip')
      .setTags(['tooltip'])
      .setDescription('')
      .setAuthors(['wzc'])
  },
];

export const routes: Route[] = [
  {
    path: '',
    canActivateChild: [UpdateTitleGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home(doc:doc/home//src:src/home)'
      },
      ...showcaseRoutes
    ],
  },
  {
    path: 'doc/:id',
    outlet: 'doc',
    component: DocumentViewerComponent,
  },
  {
    path: 'src/:id',
    outlet: 'src',
    component: SourceViewerComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
