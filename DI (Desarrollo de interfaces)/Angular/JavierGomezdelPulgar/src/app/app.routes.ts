import { Routes } from '@angular/router';
import { VehicleListComponent } from './components/Vehicle-list-component/Vehicle-list-component';
import { FilmsListPage } from './components/films-list-page/films-list-page';

export const routes: Routes = [
  {path: 'Vehicle-list', component: VehicleListComponent},
  {path: 'Films-list', component: FilmsListPage},
  {path: '', pathMatch: 'full', redirectTo: '/Vehicle-list'}
];
