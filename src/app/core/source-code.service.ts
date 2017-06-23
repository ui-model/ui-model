import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { defaultIfError, toText } from '@ui-model/angular';

@Injectable()
export class SourceCodeService {

  constructor(private http: Http) {
  }

  loadFile(name: string, ext: string): Observable<string> {
    if (!name) {
      return Observable.of('');
    }
    return this.http.get(`app/showcase/${name}/${name}.component.${ext}`)
      .map(toText)
      .catch(defaultIfError(''));
  }

  loadDocument(name: string, locale: string = navigator.language): Observable<string> {
    if (!name) {
      return Observable.of('');
    }
    return this.http.get(`app/showcase/${name}/_docs/readme.${locale}.md`)
      .catch(() => this.http.get(`app/showcase/${name}/_docs/readme.md`))
      .map(toText)
      .catch(defaultIfError(''));
  }
}
