import { Films } from './../../interfaces/films-list-response';
import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-films-item-component',
  styleUrl: './films-item-component.css',
  templateUrl: './films-item-component.html',
})

export class FilmsItemComponent {
  Films = input<Films>();
}
