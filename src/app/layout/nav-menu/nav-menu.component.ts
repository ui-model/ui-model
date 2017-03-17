import {Component} from '@angular/core';
import {routes} from '../../app-routing.module';
import {Metadata} from '../../showcase/_common/meta-data';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  items = routes[0].children.map((route)=> {
    return {
      title: (route.data as Metadata || {title: ''}).title,
      route: route.path,
    }
  });
}
