import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SourceCodeService} from '../../core/source-code.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  constructor(private route: ActivatedRoute, private sourceCode: SourceCodeService) {
    this.route.params.subscribe(({id}) => {
      this.document = this.sourceCode.loadFile(id, 'md');
    });
  }

  document: Observable<string>;

  ngOnInit() {
  }

}
