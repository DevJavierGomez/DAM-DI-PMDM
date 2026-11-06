import { Films } from '../../interfaces/films-list-response';
import { FilmsService } from './../../service/films-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmsItemComponent } from '../films-item-component/films-item-component';

@Component({
  imports: [FilmsItemComponent],
  selector: 'app-films-list-page',
  styleUrl: './films-list-page.css',
  templateUrl: './films-list-page.html',
})
export class FilmsListPage implements OnInit {

  FilmsService = inject(FilmsService);
  FilmsList = signal<Films[]>([]);

  ngOnInit(): void {
    this.FilmsService.getAll().subscribe(resp => {
      this.FilmsList.set(resp.results);
    })
  }


}
