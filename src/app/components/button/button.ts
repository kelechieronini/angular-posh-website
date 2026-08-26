import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  buttonType = input<'primary' | 'secondary'>('primary');
  buttonText = input<string>('');
}
