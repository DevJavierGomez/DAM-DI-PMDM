import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterDetailResponse } from '../../interface/character-detail-response';

@Component({
  imports: [],
  selector: 'app-pokemon-modal',
  styleUrl: './pokemon-modal.css',
  templateUrl: './pokemon-modal.html',
})
export class PokemonModal {
  activateModal = inject(NgbActiveModal);

  @Input() pokemonDetail: CharacterDetailResponse | undefined;
}
