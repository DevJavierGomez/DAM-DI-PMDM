import { Character } from './../../interfaces/character-list-response';
import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {

  Character = input<Character>();


  CharacterClicked = output<string>();
  id: string = '';


  getCharacter(): string {
    this.id = this.Character()?.url.split("/")[6]!;
    return this.id;
  }


  emitCharacterClicked() {
    const id = this.getCharacter();
    this.CharacterClicked.emit(id);
}

}
