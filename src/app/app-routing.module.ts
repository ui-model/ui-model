import {Route, RouterModule} from '@angular/router';
import {DocumentViewerComponent} from './layout/document-viewer/document-viewer.component';
import {SourceViewerComponent} from './layout/source-viewer/source-viewer.component';
import {UpdateTitleGuard} from './core/update-title.service';
import {showcaseRoutes} from './utils/showcase-routes';

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
