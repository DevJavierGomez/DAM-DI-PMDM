import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list-component/character-list-component';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component';

export const routes: Routes = [
  {path: 'Character-list', component: CharacterListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/Character-list'},
  {path: 'Episode-list', component: EpisodeListComponent}
];
