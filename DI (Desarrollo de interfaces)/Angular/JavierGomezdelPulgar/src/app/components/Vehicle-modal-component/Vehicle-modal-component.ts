import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetailResponse } from '../../interfaces/vehicle-detail-response';

@Component({
  imports: [],
  selector: 'app-Vehicle-modal-component',
  styleUrl: './Vehicle-modal-component.css',
  templateUrl: './Vehicle-modal-component.html',
})
export class VehicleModalComponent {

  activeModal = inject(NgbActiveModal);
  @Input() VehicleDetail: VehicleDetailResponse | undefined;
}
