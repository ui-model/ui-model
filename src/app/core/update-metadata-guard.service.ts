import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
import { Metadata } from '../utils/meta-data';
import { MetadataService } from './metadata.service';

@Injectable()
export class UpdateMetadataGuard implements CanActivateChild {
  constructor(private meta: MetadataService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.meta.load(childRoute.routeConfig.path, childRoute.data as Metadata).pipe(
      map(() => true),
      catchError(() => of(true)),
    );
  }
}
