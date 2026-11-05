import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { People } from '../../interfaces/people-list-response';
import { PeopleService } from './../../service/people-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { PeopleModalComponent } from '../people-modal-component/people-modal-component';
import { PeopleItemComponent } from '../people-item-component/people-item-component';

@Component({
  imports: [PeopleItemComponent],
  selector: 'app-people-list-component',
  styleUrl: './people-list-component.css',
  templateUrl: './people-list-component.html',
})
export class PeopleListComponent implements OnInit {
  PeopleService = inject(PeopleService);
  PeopleList = signal<People[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.PeopleService.getAll().subscribe(resp => {
      this.PeopleList.set(resp.results);
    });
  }

  openPeopleModal(id: string) {
    console.log('id emitido', id)
    this.PeopleService.getOne(id).subscribe(resp => {
      console.log('datos recibidos', resp)
      const modalRef = this.modalService.open(PeopleModalComponent);
      modalRef.componentInstance.PeopleDetail = resp;
    })
  }

}
