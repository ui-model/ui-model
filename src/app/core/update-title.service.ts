import {Injectable} from '@angular/core';
import {CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Title} from '@angular/platform-browser';
import {Metadata} from '../showcase/_common/meta-data';

@Injectable()
export class UpdateTitleGuard implements CanActivateChild {
  constructor(private title: Title) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    if (childRoute.data) {
      const title = (childRoute.data as Metadata).title;
      this.title.setTitle(`${title} - UI Model Showcase`);
    }
    return true;
  }
}
