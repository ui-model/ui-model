import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

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
      title: 'Form',
      route: '/form',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
