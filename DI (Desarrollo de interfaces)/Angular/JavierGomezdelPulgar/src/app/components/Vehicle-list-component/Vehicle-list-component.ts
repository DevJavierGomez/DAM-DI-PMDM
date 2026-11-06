import { Vehicle } from './../../interfaces/vehicle-list-response';
import { Component, inject, OnInit, signal } from '@angular/core';
import { VehicleService } from '../../service/vehicle-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleModalComponent } from '../Vehicle-modal-component/Vehicle-modal-component';

@Component({
  imports: [],
  selector: 'app-vehicle-list-component',
  styleUrl: './vehicle-list-component.css',
  templateUrl: './vehicle-list-component.html',
})
export class VehicleListComponent implements OnInit{
  VehicleService = inject(VehicleService);
  VehicleList = signal<Vehicle[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.VehicleService.getAll().subscribe(resp => {
      this.VehicleList.set(resp.results);
    });
  }

  openPeopleModal(id: string) {
    this.VehicleService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(VehicleModalComponent);
      modalRef.componentInstance.VehicleDetail = resp;
    });
  }
}
