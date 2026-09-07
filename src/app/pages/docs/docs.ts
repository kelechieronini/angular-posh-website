import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Features } from '../../components/features/features';
import { Customization } from '../../components/customization/customization';
import { Faq } from '../../components/faq/faq';

@Component({
  selector: 'app-docs',
  imports: [RouterLink, Features, Customization, Faq],
  templateUrl: './docs.html',
})
export class Docs {
  pages = [
    { name: 'Home', description: 'Landing page with hero, project showcase, and call-to-action sections.' },
    { name: 'About', description: 'Company overview with mission, vision, and values cards.' },
    { name: 'Contact', description: 'Contact form and information for getting in touch.' },
  ];
}
