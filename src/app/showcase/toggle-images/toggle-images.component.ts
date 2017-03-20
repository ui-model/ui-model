import {Component} from '@angular/core';
import {Toggle} from 'ui-model';

@Component({
  selector: 'app-toggle-images',
  templateUrl: './toggle-images.component.html',
  styleUrls: ['./toggle-images.component.scss']
})
export class ToggleImagesComponent {
  img = new Toggle();
}
