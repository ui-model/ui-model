import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SourceCodeService {

  constructor(private http: Http) {
  }

  loadFile(name, ext): Observable<string> {
    return this.http.get(`/src/app/showcase/${name}/${name}.component.${ext}`)
      .map(resp => resp.text());
  }
}
