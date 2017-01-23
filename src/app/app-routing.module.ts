import {Route, RouterModule} from '@angular/router';
import {SelectComponent} from './showcase/select/select.component';
import {MultiSelectComponent} from './showcase/multi-select/multi-select.component';
import {ToggleComponent} from './showcase/toggle/toggle.component';
import {TableComponent} from './showcase/table/table.component';
const routes: Route[] = [
  {
    path: '',
    redirectTo: '/select',
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
  }
];

export const routing = RouterModule.forRoot(routes);
