import { Vehicle } from '../../interfaces/vehicle-list-response';
import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-vehicle-item',
  templateUrl: './Vehicle-item-component.html',
  styleUrl: './Vehicle-item-component.css'
})
export class VehicleItemComponent {
  Vehicle = input<Vehicle>();
  VehicleClicked = output<string>();

  emitVehicleClicked() {
    const id = this.Vehicle()?.url.split('/')[5]!;
    this.VehicleClicked.emit(id);
  }
}
