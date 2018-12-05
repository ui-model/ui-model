import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { template } from 'lodash';

export interface IRoute {
  data?: {
    title?: string,
    titleTemplateForChildren?: string;
  };
  parent?: IRoute;
  root?: IRoute;
}

@Injectable({ providedIn: 'root' })
export class UpdateTitleGuard implements CanActivateChild {
  constructor(private title: Title) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const title = titleOf(childRoute, titleOfRoot(childRoute));
    if (title) {
      this.title.setTitle(title);
    }
    return true;
  }
}

export function titleTemplateOf(route: IRoute): string {
  if (!route || !route.data) {
    return '<%= current %>';
  }
  return route.data.titleTemplateForChildren || titleTemplateOf(route.parent);
}

export function titleOfRoot(route: IRoute): string {
  if (!route || !route.data) {
    return '';
  }
  return titleOfRoot(route.parent) || route.data.title;
}

export function titleOf(route: IRoute, rootTitle: string = ''): string {
  if (!route || !route.data) {
    return '';
  }
  const currentTitle = route.data.title;
  if (route === route.root) {
    return currentTitle;
  }

  const titleTemplate = titleTemplateOf(route.parent);
  const titleOfParent = titleOf(route.parent, rootTitle);

  if (!currentTitle || currentTitle === titleOfParent) {
    return titleOfParent;
  }

  return template(titleTemplate)({
    current: currentTitle,
    parent: titleOfParent,
    root: rootTitle,
  });
}

