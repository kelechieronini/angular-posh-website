import { Component } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.html',
})
export class Customization {
  sections = [
    {
      title: 'Colors',
      description: 'The primary accent color is #007AFF (blue). Search for this hex value across the templates and replace it with your brand color. You will find it in buttons, hover states, active links, and border accents.',
    },
    {
      title: 'Fonts',
      description: 'Posh uses system fonts by default for fast loading. To change the font, update the font-family in styles.css or add a Google Font import and update the Tailwind config.',
    },
    {
      title: 'Content',
      description: 'All text content lives directly in the HTML templates or in the component TypeScript files. Headlines, descriptions, and card data can be edited in place. For dynamic lists, update the array in the corresponding .ts file.',
    },
    {
      title: 'Images',
      description: 'Replace images in the public/images/ folder. Keep the same filenames or update the src paths in the templates. The hero image, project screenshots, and logos are all located there.',
    },
  ];
}
