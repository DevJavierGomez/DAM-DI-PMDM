import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleDetailResponse } from '../../interfaces/people-detail-response';

@Component({
  imports: [],
  selector: 'app-people-modal-component',
  styleUrl: './people-modal-component.css',
  templateUrl: './people-modal-component.html',
})
export class PeopleModalComponent {

  activateModal = inject(NgbActiveModal);

  @Input() PeopleDetail: PeopleDetailResponse | undefined;
}
