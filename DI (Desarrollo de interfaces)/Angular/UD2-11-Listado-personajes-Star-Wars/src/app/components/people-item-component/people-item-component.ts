import { People } from './../../interfaces/people-list-response';
import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-people-item-component',
  styleUrl: './people-item-component.css',
  templateUrl: './people-item-component.html',
})
export class PeopleItemComponent {

  People = input<People>();
  PeopleClicked = output<string>();

  emitPeopleClicked() {
    const id = this.People()?.url.split('/')[5]!;
    this.PeopleClicked.emit(id);
  }

}
