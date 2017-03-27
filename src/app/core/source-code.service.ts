import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SourceCodeService {

  constructor(private http: Http) {
  }

  loadFile(name, ext): Observable<string> {
    return this.http.get(`/src/app/showcase/${name}/${name}.component.${ext}`)
      .map(resp => resp.text());
  }

  loadDocument(name, locale = navigator.language): Observable<string> {
    return this.http.get(`/src/app/showcase/${name}/_docs/${name}.component.${locale}.md`)
      .catch(() => this.http.get(`/src/app/showcase/${name}/_docs/${name}.component.md`))
      .map(resp => resp.text());
  }
}
