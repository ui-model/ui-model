import {Component} from '@angular/core';
import {MetaService} from '../../core/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(public meta: MetaService) {
  }
}
