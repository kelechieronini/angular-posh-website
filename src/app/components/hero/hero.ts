import { Component, input, output } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-hero',
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  headline = input<string>('Create remarkable websites');
  subtext = input<string>('Anything you can design, you can design better.');
  ctaClicked = output<void>();

  onCtaClick(): void {
    this.ctaClicked.emit();
  }
}
