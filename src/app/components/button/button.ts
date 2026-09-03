import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
})
export class Button {
  buttonType = input<'primary' | 'secondary'>('primary');
  buttonText = input<string>('');
}
