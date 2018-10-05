import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SourceCodeService {

  constructor(private http: HttpClient) {
  }

  loadFile(name: string, ext: string): Observable<string> {
    if (!name) {
      return of('');
    }
    return this.http.get(`app/showcase/${name}/${name}.component.${ext}`, { responseType: 'text' }).pipe(
      catchError(() => of('')),
    );
  }

  loadDocument(name: string, locale: string = navigator.language): Observable<string> {
    if (!name) {
      return of('');
    }
    return this.http.get(`app/showcase/${name}/_docs/readme.${locale}.md`, { responseType: 'text' }).pipe(
      catchError(() => this.http.get(`app/showcase/${name}/_docs/readme.md`, { responseType: 'text' })),
      catchError(() => of('')),
    );
  }
}
