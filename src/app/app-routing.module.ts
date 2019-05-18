import { Route, RouterModule } from '@angular/router';
import { UpdateTitleGuard } from '@ui-model/angular';
import { UpdateMetadataGuard } from './core/update-metadata-guard.service';
import { NgModule } from '@angular/core';

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
        loadChildren: () => import('./showcase/showcase.module').then(m => m.ShowcaseModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
