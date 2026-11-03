import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeService } from './../../service/episode-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { EpisodeModal } from '../episode-modal/episode-modal';
import { Episode } from '../../interfaces/episode-list-response';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent implements OnInit {


  EpisodeService = inject(EpisodeService);
  EpisodeList = signal<Episode[]>([]);
  private modalService = inject(NgbModal);


  ngOnInit(): void {
    this.EpisodeService.getAll().subscribe(resp => {
      this.EpisodeList.set(resp.results);
    });
  }

  openEpisodeModal(id: string) {
    this.EpisodeService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(EpisodeModal);
      modalRef.componentInstance.EpisodeDetail = resp;
    })
  }



}
