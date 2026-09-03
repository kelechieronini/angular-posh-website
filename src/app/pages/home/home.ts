import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Projects } from '../../components/projects/projects';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Cta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
