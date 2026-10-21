import { RouterOutlet } from '@angular/router';
import { Component, signal } from '@angular/core';
import { CocktailListComponent } from './components/cocktail-list-component/cocktail-list-component';

@Component({
  imports: [RouterOutlet, CocktailListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('UD2-04-The-lastest-Cocktails');
}
