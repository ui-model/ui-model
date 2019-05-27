import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SourceCodeService } from '../../core/source-code.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(source: SourceCodeService) {
    this.content = source.loadDocument('home');
  }

  content: Observable<string>;
}
