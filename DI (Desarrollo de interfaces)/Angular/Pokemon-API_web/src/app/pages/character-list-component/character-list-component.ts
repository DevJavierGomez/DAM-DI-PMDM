import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from '../../interface/character-list-response';
import { CharacterService } from './../../service/character-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonModal } from '../pokemon-modal/pokemon-modal';
import { CharacterItemComponent } from '../character-item-component/character-item-component';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit {

  CharacterService = inject(CharacterService);
  pokemonList = signal<Pokemon[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
   this.CharacterService.getAll().subscribe(resp => {
      this.pokemonList.set(resp.results);
    });
  }

  openPokemonModal(id: string) {
    this.CharacterService.getOne(id).subscribe(resp => {

      const modalRef = this.modalService.open(PokemonModal);
		  modalRef.componentInstance.pokemonDetail = resp;

    });

  }
}
