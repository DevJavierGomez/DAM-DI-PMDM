import { Component, input, output } from '@angular/core';
import { Pokemon } from '../../interface/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {
  Pokemon = input<Pokemon>();

  pokemonClicked = output<string>();
  id: string = '';

  getCharacterId() {
    this.id = this.Pokemon()?.url.split("/")[6]!;
    return this.id;
  }

  emitCharacterClicked() {
    const id = this.getCharacterId();
    this.pokemonClicked.emit(id);
  }

}
