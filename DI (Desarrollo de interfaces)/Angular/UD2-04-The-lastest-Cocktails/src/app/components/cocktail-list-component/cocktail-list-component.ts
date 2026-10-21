import { Component, inject, OnInit, signal } from '@angular/core';
import { CocktailService } from '../../services/cocktail-service';
import { Drink } from '../../interfaces/drink-response';
import { CocktailItemComponent } from '../cocktail-item-component/cocktail-item-component';

@Component({
  imports: [CocktailItemComponent],
  selector: 'app-cocktail-list-component',
  styleUrl: './cocktail-list-component.css',
  templateUrl: './cocktail-list-component.html',
})

export class CocktailListComponent implements OnInit {
  cocktailService = inject(CocktailService);
  cocktailList = signal<Drink[]>([]);

  ngOnInit(): void {
    this.loadCocktails();
  }

  loadCocktails(): void {
    this.cocktailService.getCocktails().subscribe({
      next: (resp) => {
        console.log('Datos recibidos:', resp);
        this.cocktailList.set(resp.drinks);
      },
    });
  }
}
