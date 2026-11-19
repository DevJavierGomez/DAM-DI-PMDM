import { AbilityDetailResponse } from './../../interface/ability-detail-response';
import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-ability-modal',
  styleUrl: './ability-modal.css',
  templateUrl: './ability-modal.html',
})
export class AbilityModal {
  activateModal = inject(NgbActiveModal);

  @Input() AbilityDetail: AbilityDetailResponse | undefined;
}
