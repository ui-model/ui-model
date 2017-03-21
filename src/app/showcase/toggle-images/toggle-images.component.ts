import {Component} from '@angular/core';
import {Toggle} from 'ui-model';

@Component({
  selector: 'app-toggle-images',
  templateUrl: './toggle-images.component.html',
  styleUrls: ['./toggle-images.component.scss']
})
export class ToggleImagesComponent {
  toggle = new Toggle();
}


interface Calendar {
  value: Date;
  year: number;
  month: number;
  weeks: number[];
  getDays(week: number): Date[];
  goTo(date: Date): void;
  goToPrevMonth(): void;
  goToNextMonth(): void;
  isToday(date: Date): void;
  isActive(date: Date): void;
  isWeekEnd(date: Date): void;
  readonly weekdayNames: string[];
  readonly monthNames: string[];
}
