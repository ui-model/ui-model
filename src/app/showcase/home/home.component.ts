import { Component } from '@angular/core';
import { SourceCodeService } from '../../core/source-code.service';
import { Observable } from 'rxjs';

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
