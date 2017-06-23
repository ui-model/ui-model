import { Route, RouterModule } from '@angular/router';
import { UpdateTitleGuard } from '@ui-model/angular';
import { UpdateMetadataGuard } from './core/update-metadata-guard.service';

export const routes: Route[] = [
  {
    path: '',
    data: {
      title: 'UI Model Showcase',
      titleTemplateForChildren: '<%= current %> - <%= parent %>',
    },
    canActivateChild: [UpdateTitleGuard, UpdateMetadataGuard],
    children: [
      {
        path: '',
        loadChildren: './showcase/showcase.module#ShowcaseModule',
      },
    ],
  },
];

export const routing = RouterModule.forRoot(routes);
