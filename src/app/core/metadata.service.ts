import {Injectable} from '@angular/core';
import {Metadata} from '../utils/meta-data';
import {Tag} from '../utils/tag';
import {Author} from '../utils/author';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import {SourceCodeService} from './source-code.service';

@Injectable()
export class MetadataService extends Metadata {
  constructor(private api: SourceCodeService) {
    super();
  }

  id: string;
  title: string;
  tags: Tag[];
  description: string;
  document: string;
  types = ['html', 'ts', 'scss', 'spec.ts'];
  source: string;
  sources: string[] = [];
  authors: Author[];

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
    Object.assign(this, new Metadata(), metadata);
    return Observable.zip(
      this.api.loadDocument(id)
        .do((doc) => this.document = doc),
      ...this.types.map((type, index) => {
        return this.api.loadFile(id, type)
          .do((source) => {
            this.sources[index] = source;
          });
      }))
      .do(() => this.type = this.types[0]);
  }
}
