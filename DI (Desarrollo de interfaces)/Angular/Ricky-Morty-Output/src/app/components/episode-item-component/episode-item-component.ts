import { Component, input, output } from '@angular/core';
import { Episode } from '../../interfaces/episode-list-response';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent {

  Episode = input<Episode>();

  EpisodeClicked = output<string>();
  id: string = '';

  getEpisodeId() {
    this.id = this.Episode()?.url.split("/")[6]!;
    return this.id;
  }

  emitEpisodeClicked() {
    const id = this.getEpisodeId();
    this.EpisodeClicked.emit(id);
  }

}
