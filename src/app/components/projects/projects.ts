import { Component } from '@angular/core';

export interface Showcase {
  title: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
})
export class Projects {
  projects: Showcase[] = [
    {
      title: 'Landing NOKIA',
      description: '(Nokia 5)',
      image: '/images/home-landing-nokia.jpg',
      alt: 'Landing NOKIA preview',
    },
    {
      title: 'Landing Software',
      description: '(Skype, Dropbox)',
      image: '/images/home-landing-software-b5.png',
      alt: 'Landing Software preview',
    },
    {
      title: 'Education',
      description: '(American University, Stanford)',
      image: '/images/home-education.jpg',
      alt: 'Education preview',
    },
    {
      title: 'Restaurant',
      description: '(The Smoke Haus, Yung Kee)',
      image: '/images/home-restaurant.jpg',
      alt: 'Restaurant preview',
    },
    {
      title: 'Conference',
      description: '(Chain React)',
      image: '/images/home-conference.jpg',
      alt: 'Conference preview',
    },
    {
      title: 'Digital Agency',
      description: '(Technext, Green Chameleon)',
      image: '/images/home-digital-agency.jpg',
      alt: 'Digital Agency preview',
    },
    {
      title: 'Hospital',
      description: '(Northwestern Medicine, Columbus Regional Health)',
      image: '/images/home-hospital.jpg',
      alt: 'Hospital preview',
    },
    {
      title: 'Careers',
      description: '(Skype, Dropbox)',
      image: '/images/page-careers.jpg',
      alt: 'Careers preview',
    },
    {
      title: 'Shop',
      description: '(Aliexpress, Sammy Dress)',
      image: '/images/home-shop.jpg',
      alt: 'Shop preview',
    },
    {
      title: 'Travel Agency',
      description: '(ireland.com)',
      image: '/images/home-travel-agency.jpg',
      alt: 'Travel Agency preview',
    },
    {
      title: 'Hotel',
      description: '(The Peninsula, Trump Hotels)',
      image: '/images/home-hotel.jpg',
      alt: 'Hotel preview',
    },
  ];

  projectColumns: number[][] = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 5, 2],
    [9, 4, 10, 9, 0],
  ];
}
