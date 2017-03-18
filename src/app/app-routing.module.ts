import {Route, RouterModule} from '@angular/router';
import {DocumentViewerComponent} from './layout/document-viewer/document-viewer.component';
import {SourceViewerComponent} from './layout/source-viewer/source-viewer.component';
import {UpdateTitleGuard} from './core/update-title.service';
import {showcaseRoutes} from './utils/showcase-routes';
import {BriefViewerComponent} from './layout/brief-viewer/brief-viewer.component';

export const routes: Route[] = [
  {
    path: '',
    canActivateChild: [UpdateTitleGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home(doc:home//src:home//brief:home)'
      },
      ...showcaseRoutes
    ],
  },
  {
    path: ':id',
    outlet: 'doc',
    component: DocumentViewerComponent,
  },
  {
    path: ':id',
    outlet: 'brief',
    component: BriefViewerComponent,
  },
  {
    path: ':id',
    outlet: 'src',
    component: SourceViewerComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
