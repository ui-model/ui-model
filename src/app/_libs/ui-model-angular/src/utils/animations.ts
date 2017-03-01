import {animate, transition, style, state, trigger, AnimationEntryMetadata} from '@angular/core';
export class Animations {
  static slide(enterDuration: number = 300, leaveDuration: number = 100): AnimationEntryMetadata {
    return trigger('slide', [
      state('void', style({
        transform: 'translateY(-100%)',
      })),
      state('*', style({
        transform: 'translateY(0)',
      })),
      transition(':enter', animate(`${enterDuration}ms`)),
      transition(':leave', animate(`${leaveDuration}ms`)),
    ]);
  }

  static fade(enterDuration: number = 300, leaveDuration: number = 100): AnimationEntryMetadata {
    return trigger('fade', [
      state('void', style({
        opacity: 0,
      })),
      state('*', style({
        opacity: 1,
      })),
      transition(':enter', animate(`${enterDuration}ms`)),
      transition(':leave', animate(`${leaveDuration}ms`)),
    ]);
  }
}
