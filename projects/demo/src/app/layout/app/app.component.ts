import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  tags = ['toggle', 'select', 'multi-select', 'pager', 'viewport', 'calendar', 'zoom'];

  private _filter: string;
  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
  }

  setFilter(filter: string): void {
    this.filter = filter;
  }

  ngOnInit(): void {
    this.setFilter('');
  }
}
