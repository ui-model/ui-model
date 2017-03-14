import {Injectable} from '@angular/core';
import {CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MetaService} from './meta.service';
import {Title} from '@angular/platform-browser';
import {Metadata} from '../showcase/_common/meta-data';
import {SourceCodeService} from './source-code.service';

@Injectable()
export class ChildrenGuardService implements CanActivateChild {
  constructor(private meta: MetaService, private title: Title, private sourceCode: SourceCodeService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    const meta: Metadata = childRoute.component['meta'];
    if (meta) {
      this.title.setTitle(`${meta.title} - UI Model Showcase`);
    }
    meta.document = this.sourceCode.loadFile(meta.id, 'md');

    Object.assign(this.meta, meta);
    return true;
  }
}
