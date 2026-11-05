import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleListResponse } from '../../interfaces/people-list-response';

@Component({
  imports: [],
  selector: 'app-people-modal',
  styleUrl: './people-modal.css',
  templateUrl: './people-modal.html',
})
export class PeopleModal {
  activateModal = inject(NgbActiveModal);

  @Input() PeopleDetail: PeopleListResponse | undefined;

}
