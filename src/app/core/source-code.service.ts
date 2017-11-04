import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { defaultIfError, toText } from '@ui-model/angular';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SourceCodeService {

  constructor(private http: Http) {
  }

  loadFile(name: string, ext: string): Observable<string> {
    if (!name) {
      return of('');
    }
    return this.http.get(`app/showcase/${name}/${name}.component.${ext}`).pipe(
      map(toText),
      catchError(defaultIfError('')),
    );
  }

  loadDocument(name: string, locale: string = navigator.language): Observable<string> {
    if (!name) {
      return of('');
    }
    return this.http.get(`app/showcase/${name}/_docs/readme.${locale}.md`).pipe(
      catchError(() => this.http.get(`app/showcase/${name}/_docs/readme.md`)),
      map(toText),
      catchError(defaultIfError('')),
    );
  }
}
