import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.html',
})
export class Features {
  features = [
    {
      title: 'Responsive Design',
      description: 'Looks flawless on every device — mobile, tablet, and desktop.',
    },
    {
      title: 'Modern UI',
      description: 'Clean, minimal aesthetic with smooth transitions and hover effects.',
    },
    {
      title: 'Multiple Demos',
      description: '11 pre-built homepage layouts for different industries and use cases.',
    },
    {
      title: 'Easy Customization',
      description: 'Swap colors, fonts, and content in seconds using Tailwind CSS utility classes.',
    },
    {
      title: 'SEO Friendly',
      description: 'Semantic HTML structure and fast load times out of the box.',
    },
    {
      title: 'Angular Powered',
      description: 'Built with Angular 21 for robust, scalable, and maintainable code.',
    },
  ];
}
