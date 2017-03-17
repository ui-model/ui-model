import {Injectable} from '@angular/core';
import {CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MetaService} from './meta.service';
import {Title} from '@angular/platform-browser';
import {Metadata} from '../showcase/_common/meta-data';

@Injectable()
export class ChildrenGuardService implements CanActivateChild {
  constructor(private meta: MetaService, private title: Title) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    const meta: Metadata = childRoute.component['meta'];
    if (meta) {
      this.title.setTitle(`${meta.title} - UI Model Showcase`);
    }

    Object.assign(this.meta, meta);
    return true;
  }
}
