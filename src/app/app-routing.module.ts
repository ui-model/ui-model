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
import {Metadata} from './showcase/_common/meta-data';
import {ChildrenGuardService} from './core/children-guard.service';
const routes: Route[] = [
  {
    path: '',
    canActivateChild: [ChildrenGuardService],
    children: [
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
      },
      {
        path: 'type-ahead',
        component: TypeAheadComponent,
      },
      {
        path: 'zoom',
        component: ZoomComponent,
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
      },
    ],
  },
];

export const routing = RouterModule.forRoot(routes);
