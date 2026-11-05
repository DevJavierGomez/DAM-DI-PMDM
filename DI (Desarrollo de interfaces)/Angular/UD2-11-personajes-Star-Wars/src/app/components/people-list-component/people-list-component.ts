import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { People } from './../../interfaces/people-list-response';
import { PeopleService } from './../../service/people-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { PeopleModal } from '../people-modal/people-modal';
import { PeopleItemComponent } from '../people-item-component/people-item-component';

@Component({
  imports: [PeopleItemComponent],
  selector: 'app-people-list-component',
  styleUrl: './people-list-component.css',
  templateUrl: './people-list-component.html',
})
export class PeopleListComponent implements OnInit {

  PeopleService = inject(PeopleService);
  peopleList = signal<People[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.PeopleService.getAll().subscribe(resp => {
      this.peopleList.set(resp.results);
    });
  }

  openPeopleModal(id: string) {
    this.PeopleService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(PeopleModal);
      modalRef.componentInstance.PeopleDetail = resp;
    })
  }


}
