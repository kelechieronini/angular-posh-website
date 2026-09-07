import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
})
export class Faq {
  faqs = [
    {
      question: 'Can I use Posh for commercial projects?',
      answer: 'Yes. Posh is designed for commercial use. You can build client websites, SaaS landing pages, or any project that needs a polished, professional look.',
    },
    {
      question: 'Do I need to know Angular?',
      answer: 'Basic Angular knowledge helps, but the template is straightforward. Each component is self-contained and well-documented. You can customize colors, text, and images without deep framework knowledge.',
    },
    {
      question: 'How do I change the color scheme?',
      answer: 'Posh uses Tailwind CSS. All colors are defined as utility classes in the HTML templates. Search for the hex values (like #007AFF for blue) and replace them with your brand colors.',
    },
    {
      question: 'Can I add new pages?',
      answer: 'Absolutely. Create a new component in the pages folder, add a route in app.routes.ts, and link it from the navbar. The router handles the rest.',
    },
    {
      question: 'Is there dark mode support?',
      answer: 'The template includes a dark section in the projects area. You can extend dark mode to the full site by adding Tailwind dark: variants to your components.',
    },
  ];
}
