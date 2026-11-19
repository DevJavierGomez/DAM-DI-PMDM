import { AbilityItem } from '../../interface/ability-list-response';
import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ability-item-component',
  styleUrl: './ability-item-component.css',
  templateUrl: './ability-item-component.html',
})
export class AbilityItemComponent {
  ability = input<AbilityItem>();

  AbilityClicked = output<string>();
  id: string = '';

  getAbilityId() {
    this.id = this.ability()?.url.split("/")[6]!;
    return this.id;
  }

  ViewDetails() {
    const id = this.getAbilityId();
    this.AbilityClicked.emit(id);
  }

}
