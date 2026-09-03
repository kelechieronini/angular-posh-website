import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
})
export class Button {
  buttonType = input<'primary' | 'secondary' | 'contact'>('primary');
  buttonText = input<string>('');
  disabled = input<boolean>(false);
}
