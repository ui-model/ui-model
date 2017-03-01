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
const routes: Route[] = [
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full',
  },
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'multi-select',
    component: MultiSelectComponent,
  },
  {
    path: 'toggle',
    component: ToggleComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'tree',
    component: TreeComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'preview',
    component: PreviewComponent,
  },
  {
    path: 'draggable',
    component: DraggableComponent,
  },
  {
    path: 'modal',
    component: ModalComponent,
  },
  {
    path: 'chart',
    component: ChartComponent,
  }
];

export const routing = RouterModule.forRoot(routes);
