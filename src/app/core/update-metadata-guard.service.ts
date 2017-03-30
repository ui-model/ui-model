import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {MetadataService} from './metadata.service';
import {Metadata} from '../utils/meta-data';

@Injectable()
export class UpdateMetadataGuard implements CanActivateChild {
  constructor(private meta: MetadataService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.meta.load(childRoute.routeConfig.path, childRoute.data as Metadata)
      .map(() => true)
      .catch(() => Observable.of(true));
  }
}
