import { Routes } from '@angular/router';
import { CharacterListComponent } from './pages/character-list-component/character-list-component';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { AbilityListComponent } from './pages/ability-list-component/ability-list-component';
import { RegisterFormPage } from './pages/register-form-page/register-form-page';

export const routes: Routes = [
  {path: 'register-form-page', component: RegisterFormPage},
  {path: 'character-list', component: CharacterListComponent},
  {path: 'ability-list', component: AbilityListComponent},
  {path: '', pathMatch: 'full', redirectTo: 'register-form-page'},
  {path: '**', component: PageNotFound}
];
