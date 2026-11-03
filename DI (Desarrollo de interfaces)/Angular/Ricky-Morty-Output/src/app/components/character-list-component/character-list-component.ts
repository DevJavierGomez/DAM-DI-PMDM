import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from './../../interfaces/character-list-response';
import { CharacterService } from './../../service/character-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterModal } from '../character-modal/character-modal';
import { CharacterItemComponent } from '../character-item-component/character-item-component';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit {

  CharacterService = inject(CharacterService);
  CharacterList = signal<Character[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.CharacterService.getAll().subscribe(resp => {
      this.CharacterList.set(resp.results);
    });
  }

  openCharacterModal(id: string) {
    this.CharacterService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(CharacterModal);
      modalRef.componentInstance.CharacterDetail = resp;
    })
  }

}
