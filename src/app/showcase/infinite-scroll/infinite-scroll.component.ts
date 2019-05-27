import { Component, OnInit } from '@angular/core';
import { Viewport } from '@ui-model/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {

  constructor() {
  }

  viewport = new Viewport().setDataSource(_.times(1000 * 1000)).setSize(200).setItemHeight(50);

  ngOnInit(): void {
  }

  scroll($event: UIEvent): void {
    console.log($event);
  }
}
