import {Component, OnInit} from '@angular/core';
import {TooltipService} from 'ui-model-angular';
import {Metadata} from '../_common/meta-data';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  total = 10;
  html = '<strong>strong</strong><em>def</em>';

  constructor(private tooltip: TooltipService) {
  }

  ngOnInit() {
  }

  alert() {
    alert(1);
  }

  static meta = new Metadata()
    .setId('tooltip')
    .setTitle('Tooltip')
    .setTags(['tooltip'])
    .setDescription('')
    .setAuthors(['wzc']);
}
