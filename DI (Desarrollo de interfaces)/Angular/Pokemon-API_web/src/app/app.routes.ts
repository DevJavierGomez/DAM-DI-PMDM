import { Routes } from '@angular/router';
import { CharacterListComponent } from './pages/character-list-component/character-list-component';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { AbilityListComponent } from './pages/ability-list-component/ability-list-component';

export const routes: Routes = [
  {path: 'character-list', component: CharacterListComponent},
  {path: 'ability-list', component: AbilityListComponent},
  {path: '', pathMatch: 'full', redirectTo: 'character-list'},
  {path: '**', component: PageNotFound}
];
