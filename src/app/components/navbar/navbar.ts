import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItem {
  label: string;
  route?: string;
  children?: { label: string; route: string }[];
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.html',
})
export class Navbar {
  mobileMenuOpen = signal(false);

  navItems: NavItem[] = [
    {
      label: 'Homes',
      children: [
        { label: 'Conference', route: '/' },
        { label: 'Digital Agency', route: '/' },
        { label: 'Education', route: '/' },
        { label: 'Hospital', route: '/' },
        { label: 'Hotel', route: '/' },
        { label: 'Landing NOKIA', route: '/' },
        { label: 'Landing Software', route: '/' },
        { label: 'Personal', route: '/' },
        { label: 'Restaurant', route: '/' },
        { label: 'Shop', route: '/' },
        { label: 'Travel Agency', route: '/' },
      ],
    },

    {
      label: 'About',
      route: '/about',
    },

    {
      label: 'Contact',
      route: '/contact',
    },

    {
      label: 'Docs',
      children: [
        { label: 'Getting Started', route: '/' },
        { label: 'Installation', route: '/' },
        { label: 'Changelog', route: '/' },
      ],
    },
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }
}
