import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
})
export class About {
  cards = [
    {
      title: 'Our Mission',
      description:
        'We believe in creating tools that empower designers and developers to build beautiful websites without compromise.',
    },
    {
      title: 'Our Vision',
      description:
        'To set the standard for modern web templates by combining aesthetics with functionality in every component we deliver.',
    },
    {
      title: 'Our Values',
      description:
        'Quality, innovation, and attention to detail drive everything we do. Every pixel matters, every interaction counts.',
    },
  ];
}
