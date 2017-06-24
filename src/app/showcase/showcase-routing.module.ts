import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Author } from '../utils/author';
import { LayoutComponent } from './_layout/layout/layout.component';
import { showcaseRoutes } from '../utils/showcase-routes';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      id: 'home',
      title: 'Home',
      authors: ['wzc'].map(Author.of),
    },
  },
  {
    path: '',
    component: LayoutComponent,
    children: showcaseRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseRoutingModule {
}
