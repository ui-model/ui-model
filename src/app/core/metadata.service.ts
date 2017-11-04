import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { zip } from 'rxjs/observable/zip';
import { tap } from 'rxjs/operators';
import { Author } from '../utils/author';
import { Metadata } from '../utils/meta-data';
import { Tag } from '../utils/tag';
import { SourceCodeService } from './source-code.service';

@Injectable()
export class MetadataService {
  constructor(private api: SourceCodeService) {
  }

  meta: Metadata = new Metadata();

  get id(): string {
    return this.meta.id;
  }

  get title(): string {
    return this.meta.title;
  }

  get tags(): Tag[] {
    return this.meta.tags;
  }

  get description(): string {
    return this.meta.description;
  }

  get authors(): Author[] {
    return this.meta.authors;
  }

  document: string;
  types = ['html', 'ts', 'scss', 'spec.ts'];
  source: string;
  sources: string[] = [];

  private _type: string = this.types[0];

  get type(): string {
    return this._type;
  }

  set type(type: string) {
    this._type = type;
    const index = this.types.indexOf(type);
    this.source = this.sources[index];
  }

  load(id: string, metadata: Metadata): Observable<any> {
    this.meta = Object.assign({}, metadata, {id: id});
    return zip(
      this.api.loadDocument(id).pipe(
        tap((doc: string) => this.document = doc, () => this.document = ''),
      ),
      ...this.types.map((type, index) => {
        return this.api.loadFile(id, type).pipe(
          tap((source) => this.sources[index] = source, () => this.sources[index] = ''),
        );
      }),
    ).pipe(
      tap(() => this.type = this.types[0]),
    );
  }
}
