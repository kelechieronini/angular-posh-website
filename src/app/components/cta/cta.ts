import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-cta',
  imports: [Button],
  templateUrl: './cta.html',
})
export class Cta {
  callouts: string[] = [
    'Optimized for every screen size down to a single pixel.',
    'The most modular layout system on the planet.',
    'More powerful than most HTML5 templates.',
    'Bootstrap 5 takes POSH to a whole new level.',
  ];
}
