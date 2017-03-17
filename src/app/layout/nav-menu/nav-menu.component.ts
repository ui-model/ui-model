import {Component} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  items = [
    {
      title: 'Select',
      route: '/select'
    },
    {
      title: 'Multiple Select',
      route: '/multi-select'
    },
    {
      title: 'Toggle',
      route: '/toggle'
    },
    {
      title: 'Table',
      route: '/table'
    },
    {
      title: 'Tree',
      route: '/tree'
    },
    {
      title: 'Form',
      route: '/form',
    },
    {
      title: 'Calendar',
      route: '/calendar',
    },
    {
      title: 'Preview',
      route: '/preview',
    },
    {
      title: 'Draggable',
      route: '/draggable',
    },
    {
      title: 'Modal',
      route: '/modal',
    },
    {
      title: 'Chart',
      route: '/chart',
    },
    {
      title: 'Type Ahead',
      route: '/type-ahead',
    },
    {
      title: 'Zoom',
      route: '/zoom',
    },
    {
      title: 'Tooltip',
      route: '/tooltip',
    },
  ];
}
